// Імпортую власний типізований хук useAppSelector.
// Він дозволяє отримувати потрібні дані зі спільного Redux Store.
import { useAppSelector } from "../../redux/hook/useAppSelector.tsx";

// Імпортую власний типізований хук useAppDispatch.
// Він дозволяє відправляти дії до Redux Store.
import { useAppDispatch } from "../../redux/hook/useAppDispatch.tsx";

// Імпортую хук useEffect з React.
// Він дозволяє виконувати певний код після відображення компонента.
import { useEffect } from "react";

// Імпортую userSliceActions, у якому знаходиться асинхронна дія loadUsers.
// Ця дія відповідає за завантаження списку користувачів із сервера.
import { userSliceActions } from "../../redux/slices/userSlice.ts";

// Імпортую дочірній компонент UserComponent.
// Він відповідає за відображення інформації про одного користувача.
import UserComponent from "./UserComponent.tsx";

// Імпортую CSS-файл зі стилями для компонента UsersComponent.
import "./UsersComponent.css";


// Створюю функціональний компонент UsersComponent,
// який відповідає за отримання та відображення списку користувачів.
const UsersComponent = () => {

    // За допомогою useAppSelector отримую масив користувачів із Redux Store.
    // state — це весь стан сховища.
    // usersStoreSlice — частина стану, яка відповідає за користувачів.
    // users — масив користувачів усередині цього Slice.
    const users = useAppSelector(state => state.usersStoreSlice.users);

    // За допомогою useAppDispatch отримую функцію dispatch.
    // Вона дозволяє відправляти звичайні та асинхронні дії до Redux Store.
    const dispatch = useAppDispatch();

    // Використовую useEffect для виконання коду після відображення компонента.
    // Порожній масив залежностей [] означає, що ефект запускається
    // після першого монтування компонента.
    useEffect(() => {

        // Відправляю асинхронну дію loadUsers до Redux Store.
        // Вона запускає запит до API для отримання списку користувачів.
        // Після успішного отримання даних спрацьовує fulfilled,
        // а редюсер userSlice записує отриманих користувачів у Store.
        dispatch(userSliceActions.loadUsers());

    }, []);

    // Повертаю розмітку компонента.
    return (

        // Створюю div-контейнер із класом users-container для оформлення списку користувачів.
        <div className="users-container">

            {
                // За допомогою методу map перебираю масив користувачів.
                // Для кожного елемента масиву створюю окремий UserComponent.
                users.map((user) => (

                    // Передаю поточного користувача через властивість user.
                    //user={user} передає об'єкт у дочірній компонент.
                    // key={user.id} задає унікальний ключ для кожного компонента
                    // та допомагає React правильно відстежувати елементи списку.
                    <UserComponent user={user} key={user.id} />

                ))
            }

        </div>
    );
};

// Експортую UsersComponent, щоб використовувати його в інших файлах застосунку.
export default UsersComponent;

