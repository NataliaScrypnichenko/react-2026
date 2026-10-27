//після того як створили сховище то ідем на пейдж
// розложити по сервісу компоненти

import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const UsersPage = () => {
//7. відхоплюємо інформацію через Provider store={store} 17:00
    //state= це стейт нашого компонента по факту посилання на сховище=назва довільна
    // тут потрібно типізувати і це доведеться робити постійно тож створюємо хук яий сам буде діставати типізацію з сховища
    //  const stateType = useSelector(state =>state ); заміняемо на хук створений

    const {users} = useAppSelector(({userSlice})=>userSlice);
   // console.log(userSlice)

    // наповнення масива через функцію loadUsers яка знаходиться в userSlice
    // useDispatch()=викликвє іншу функцію для того щоб вони виконалися
    const dispatch=useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
                // dispatch(userSlice.actions.loadUsers(value));
                dispatch(userSliceActions.loadUsers(value));
            })
    }, []);


    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.id} : {user.name}</div>;
                })
            }
        </div>
    );
};

export default UsersPage;
