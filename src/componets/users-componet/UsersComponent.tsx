import {useEffect, useState} from "react";
import type {IUser} from "../../moduls/IUser.ts";
import UserComponent from "../user-componet/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const[users, setUsers]=useState<IUser[]>([]);

    const [item,setItem]=useState<IUser | null>(null);

    useEffect(() => {
            // getUsers()
            // .then(user => {
            //     setUsers(user);
            // });
        const fetchData = async ()=>{
            const users = await getUsers();
            setUsers(users);
        }
           fetchData();
        return()=>{
            console.log('hi');
        }

    },[]);

    const foo =(item:IUser)=>{
        setItem(item);
        console.log(item);
    }


    return (
        <div>
            {/*{item.username}*/}
            {/*{JSON.stringify(item)}*/}
            {
               item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user =><UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
