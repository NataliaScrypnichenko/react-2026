тут навчаємося натискати на юзера і в низу бачити його інформацію детально, а інших юзерів немає бути там
це потрібно прописати шляхи в файлі router.tsx=> {path:'users/details', element:<SingleUserDetailsPage/>},
потім викликаємо сторінку із файла UserComponent через клікабельним <Link to={'details'}>{item.name}</Link>
а щоб була видна інформація 
то використовуємо пропсу state{} куди передаємо об'єкт який характерезує об'єкт з інформацією

щоб дістати його item то на сторінці SingleUserDetailsPage через хук   const {state} = useLocation();

щоб дістати інформацію через кнопку то використовуємо хук сторінці UserComponent:
//хук який видає об1єкт
const navigate = useNavigate();
    const handelOnClick = ()=>{
        //сюди передаємо шлях куди переходити і об'єкт опшен
       navigate('details',{state:item})
return (
<div>
<Link to={'details'} state={item}>{item.name}</Link>
<button onClick={handelOnClick}> go to details</button>
</div>
);   };
