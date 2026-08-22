import  {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import {getUsers} from "../../service/users.api.service.tsx";
import UserComponent from "./UserComponent.tsx";
import type {IResponseModel} from "../../model/IResponseModel.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers<IResponseModel & {users:IUser[]}>('/users')
            .then(value => setUsers(value.users));
    },[])

    return (
        <div>
            {
                users.map(user => (<UserComponent user={user}  key={user.id}/>))
            }
        </div>
    );
};

export default UsersComponent;
