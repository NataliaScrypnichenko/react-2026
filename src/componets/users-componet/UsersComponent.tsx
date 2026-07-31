import {useEffect, useState} from "react";
import type {IUser} from "../../moduls/IUser.ts";
import UserComponent from "../user-componet/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const[users, setUsers]=useState<IUser[]>([]);

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
    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
