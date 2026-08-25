import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import type {IUserResponseModel} from "../../model/IUserResponseModel.ts";
import UserComponent from "./UserComponent.tsx";
import "./UsersComponent.css"
import {userService} from "../../sevice/api.service.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
        // fetch("https://dummyjson.com/users")
        // .then((value) =>value.json())
        .then(({users}:IUserResponseModel) => setUsers(users));

    },[])
    return (
        <div className="users_container">
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;
