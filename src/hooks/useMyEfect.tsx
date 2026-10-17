import {useEffect, useState} from "react";

export const useMyEfect =<T,> (url:string,) => {
    //дістаємо данні
    const [objct, setObjct] = useState<T>();
    //запрос на урлу
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
             .then(res =>{
                 setObjct(res)
             } );

    },[]);

    return objct

};

// export const useMyEfect =<T,> (url:string,defaultValue:T) => {
//         defaultValue-означає що воно являє собою тип Т ,якщо це масив юзерів то
//         сюди приходить по дефолту масив юзерів навіть пустий.відповідно UsersComponent
//         потрібно застосувати другий аргумент
//         const users = useMyEfect<IUser[]>('https://jsonplaceholder.typicode.com/users',[])
 //        якщо цього не робити то потрібно зробити перевірку так як це зроблено у завданні
//
//     //дістаємо данні
//     const [objct, setObjct] = useState<T>(defaultValue);
//     //запрос на урлу
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(res =>{
//                 setObjct(res)
//             } );
//
//     },[]);
//
//     return objct
//
// };
