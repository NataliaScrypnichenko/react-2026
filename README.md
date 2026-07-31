  зараз хочем щоб була кнопка біля користувача і виводила інформацію але інформація не повина бути поруч тому що це можна зробити це потрібно в юзеркомпонентв зробити якийсь блок 
  
зараз ускладним задачу не хай дані будуть виводитись app.tsx файлі тобто унас є app.tsx  в ньому UsersComponent а вньому UserComponent,щоб з юзера UserComponent відображалось в юзерах UsersComponent тобто це комунікація між дочірніми компонентами і батьківськими компонентами

відповідно реалізуємо так головне памятати про тип даних функцій чи вони являються 
Реалізуємо с UserComponent в UsersComponent  тобто показувати з низу до гори
  
а з гори до низу робиться за допомогою пропсів

1)
UsersComponent створюємо функцію= яка може щось приймати і це виводити
const foo =(item:any)=>{
console.log(item);
} 
потім ми в провадимо його в  users.map(user =><UserComponent foo={foo} key={user.id} item={user}/>), 
біла foo це пропса UserComponent
{foo} а це функція це об'єкт із UsersComponent(батьківський), вони будуть однаковими

2)
в UserComponent типізуємо  
type UserPropType = {
item:IUser;
foo:(item:any) => void;
};
а потім ми будуємо кнопку 

3)
як айтем item в UsersComponent показати
const [item,setItem]=useState<IUser | null>(null);
const foo =(item:IUser)=>{
setItem(item);
console.log(item);
}
{JSON.stringify(item)}

в компоненті повино бути один дів а {} Багато може бути
