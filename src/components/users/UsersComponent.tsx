import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import UserComponent from "./UserComponent.tsx";

//UsersComponent відповідає за отримання та відображення списку користувачів
const UsersComponent = () => {
    // Отримуємо масив користувачів із store
    const users = useAppSelector(state => state.usersStoreSlice.users);

    // Отримуємо функцію dispatch для відправлення дій у Redux Store
    const dispatch = useAppDispatch();

    // useEffect виконує код після першого відображення компонента
    useEffect(() => {

        // Викликаємо асинхронну дію loadUsers,
        // яка отримує список користувачів із сервера
        dispatch(userSliceActions.loadUsers());

    }, []);

    return (
        <div>
            {
                // Перебираємо масив користувачів методом map
                // Для кожного користувача створюємо компонент UserComponent
                users.map((user) => (
                    <UserComponent user={user} key={user.id} />
                ))
            }
        </div>
    );
};
export default UsersComponent;
