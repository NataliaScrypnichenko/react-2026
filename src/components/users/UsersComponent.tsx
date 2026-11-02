import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import UserComponent from "./UserComponent.tsx";
import './UsersComponent.css'

//UsersComponent відповідає за отримання та відображення списку користувачів
const UsersComponent = () => {
    // За допомогою useAppSelector отримую масив користувачів із store
    const users = useAppSelector(state => state.usersStoreSlice.users);

    // За допомогою useAppDispatch отримую функцію dispatch=яка дозволяє запускати дії Redux
    const dispatch = useAppDispatch();

    // useEffect виконує код після першого відображення компонента
    useEffect(() => {
        // Відправляю асинхронну дію loadUsers,яка запускає запит до сервера для отримання списку постів.
        // після успішного запиту дані записуються в store
        dispatch(userSliceActions.loadUsers());

    }, []);

    return (
        <div className="users-container">
            {
                // Перебираю масив користувачів методом map
                // то для кожного користувача створюю компонент UserComponent
                users.map((user) => (
                    <UserComponent user={user} key={user.id} />
                ))
            }
        </div>
    );
};
export default UsersComponent;
