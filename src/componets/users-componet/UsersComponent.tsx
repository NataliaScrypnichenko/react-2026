import {useEffect, useState} from "react";
import type {IUser} from "../../moduls/IUser.ts";
import UserComponent from "../user-componet/UserComponent.tsx";


const UsersComponent = () => {

    const[users, setUsers]=useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(user => {
                setUsers(user);
            });

        return()=>{
            console.log('hi');
        }

    },[]);
    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
