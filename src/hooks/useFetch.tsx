import {useEffect, useState} from "react";


const UseFetch = () => {
    console.log('useFetch');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com//users')
            .then(res => res.json())
            .then(value => setUsers(value));

        return ()=> {
            console.log('unsubscribe');
        }


    }, []);

    return  users //повертаю об'єкт юзерс// звісно можна повернути різноманітну кількість значень не обов'язково пакувати це
    // в [users] масив можна просто звичайний просто об'єкт users або {users}
};

export default UseFetch;
// тере це означає що є хук мій UseFetch який інкапсолює дві інших дії
