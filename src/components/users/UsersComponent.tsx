import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/usersSlise/userSlice.ts";

//після того як створили сховище то ідем на UsersComponent
// розложити по сервісу компоненти

const UsersComponent = () => {
    //7. відхоплюємо інформацію через Provider store={store} 17:00
    //state= це стейт нашого компонента по факту посилання на сховище=назва довільна
    // тут потрібно типізувати і це доведеться робити постійно тож створюємо хук яий сам буде діставати типізацію з сховища
    //  const stateType = useSelector(state =>state ); заміняемо на хук створений
    const {users,loadState} = useAppSelector(({userSlice}) => userSlice);
    // наповнення масива через функцію loadUsers яка знаходиться в userSlice
    // useDispatch()=викликвє іншу функцію для того щоб вони виконалися
    // const dispatch=useDispatch();
    //викликаємо useAppDispatch тут і він уже типізований
    const dispatch=useAppDispatch();

// 2.2= фетч відбувається на рівні компонента не є добре можуть бути проблеми тому що тут асинхрона
// операція dispatch не в асинхронщині погано працює для нього зробили іншу бібдіотеку ..asyncThunk=перетворювач
// асинхроних операцій тут фетч удаляєм запит нп АРІ
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())

    },[]);

    return (
        <div>
            { !loadState && <div>loading</div>}
            {
                users.map((user) => {
                    return <div key={user.id}>{user.id} : {user.name}</div>;
                })
            }
        </div>
    );
};

export default UsersComponent;
