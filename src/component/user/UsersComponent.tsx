import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import {getAll} from "../../servise/getneral.api.servise.ts";
import type {IResponseModel} from "../../model/IResponseModel.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {

    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IResponseModel & {users:IUser[]}>('/users')
            .then(value=>setUsers(value.users));
    },[])

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
