import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

//викликає UserComponent
const UsersComponent = () => {
// 1 крок виводим дані щоб видно в якій послідовності вони працюють
// 3 крок
    console.log('users');
    // 5 крок
    const [users, setUsers] = useState([]);

//коли ми її записали то вона прокидається в <UserComponent foo={foo}/> коли ми використовуємо
// створену функцію то функція memo перестала працювати викликається знову 2 рази ('user') тому,
// що const foo є об'єкт і вона змінюється, тому пропса яка заходить в memo і змінюється то змінюється і memo
    // щоб такого не було тобто змін то використовуємо useCallback() і масив залежності [] він працює так, як в useEffect,
    // якшо будуть аргументи в началі()=>{, то їх потрібно визначити і в []/то функція буде змінюватися
    // тоді коли буде змінюватися аргумент..foo - за допомоги закешували useCallback її
    // тепер можна не тільки кешувати компоненти а й його пропси кешувати які будуть являтися об'єктами або функціями

    const foo= useCallback(()=>{
        console.log('test');
    },[])

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
            {/*тепер сюди повина зайти функція і туди же передаємо foo*/}
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;
