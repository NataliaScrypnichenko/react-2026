import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


const UsersComponent = () => {
console.log('users')
// існує вона тут прокидвється туди в низ-форвардується
//     const foo =()=>{
//         console.log('test');
//     };

    const foo= useCallback(()=>{
        console.log('test ')
    },[])// цей масив залежності такий самий як із dependenciies в useEffect- тобто якщо є аргументи то її
    // потрібно визвати і тут і відповідно функція буде перебудовуватися кожного разу коли буде змінюватися аргумент
    // тобто за допомогою useCallback ми функцію за кешувалиі вона відпрацює один раз

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com//users')
            .then(res => res.json())
            .then(value => setUsers(value));

        return ()=> {
            console.log('unsubscribe');
        }


    }, []);

    return (
        <div>
           {/*// відображаємо функцію тут і виводитмо в цьому файлі існувати*/}
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;
// тобто зараз ми можемо кешувати нге тільки компонент але і ще його пропси які будуть являтися об'єктами обо функціями
