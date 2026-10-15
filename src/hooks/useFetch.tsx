import {useEffect, useState} from "react";

//створення власних хуків їх можна використовувати в функціональних компонентах або в інших хуках
// в реакті щоб створити хук потрібно  описати просто функцію але назвати її з префіксом use
export const useFetch =()=> {

    const [users, setUsers] = useState([]);

     useEffect(() => {

         fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
             .then(value => {
                 setUsers(value)
             });

         return () => {
             console.log('unsubscribe');
         };

     },[]);

     return users;
 }
