import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


const UsersComponent = () => {
console.log('users')

    // const arry: number[] = [11,22,33]// в такому вигляді вона пррірендиться два рази

    const arry: number[] = useMemo(() =>{
        return [11,22,33]
    },[]);// буде повертати те значення яке яхочу щоб тут було зафіксовано, по факту це
    // функція породжувальник чогось(тобто вона поверне цей масив),[]) це працю є так само як в =депси
    // тобто якщо є якісь залежності заякими потрібно слідкувати або якщо що то оновити
    // тобто зараз вона викликається тільки раз =тобто оптимізували

    const foo= useCallback(()=>{
        console.log('test ')
    },[])

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

            <UserComponent foo={foo} arry={arry}/>
        </div>
    );
};

export default UsersComponent;

// ЄДИНИЙ МОМЕНТ ЦЕ МИ НЕПОВИННІ ПХАТИ УСЮДИ ПОДІБНОГО РОДУ ШТУКИ ПОВИННІ БУТИ ТІЛЬКИ ТОДІ КОЛИ ЦЕ ВЕЛИКІ
// МАСИВИ ІНФОРМАЦІЇ, АБО Ф-Ї ВАЖКІ ІТЕРАЦІЯ АБО ФЕТЧ ЗАПИТИ
// це може бути запитана на спів бесиді
