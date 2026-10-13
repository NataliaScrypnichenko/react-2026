import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";

//викликає UserComponent
const UsersComponent = () => {
// 1 крок виводим дані щоб видно в якій послідовності вони працюють
// 3 крок
    console.log('users');
   // 5 крок
    const [users, setUsers] = useState([]);

// 4 крок usersComponent отримує дані і через setUsers впроваджує і трігає рірендер useState
// робить запит на користувачів
     useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
             .then(value => {
                 //передаємо дані які отримали
                 setUsers(value)
             });
// якщо в нас буде компонент знищуватись -зникати(наприклад коли з сторінки на сторінку переходим)
// додатково використовуємо- то не бачим як вона відпрацьовує
         return () => {
             console.log('unsubscribe');
         };

     },[]);

    return (
        <div>
            UserComponent
            {/*// 2 крок рендириться user*/}
            {/*// 6 крок подвійний виклик user*/}
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;
