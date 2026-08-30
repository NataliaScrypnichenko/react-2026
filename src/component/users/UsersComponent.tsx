import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {getAllUsers} from "../../service/api.service.tsx";



const UsersComponent = () => {

    const [users,setUsers] = useState<IUser[]>([]);

    const [query] = useSearchParams();
    useEffect(() => {

        const page= query.get('page') || '1';

        getAllUsers(page || '')
            .then(value => setUsers(value.users))
    },[query]);


    return (
        <div>
            {
                users.map((value:IUser) => (<UserComponent key={value.id} user={value}/>))
            }
        </div>
    );
};

export default UsersComponent;
