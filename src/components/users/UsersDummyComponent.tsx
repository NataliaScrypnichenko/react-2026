import {useEffect, useState} from "react";
import type {IUserDummy} from "../../model/users/IUserDummy.tsx";
import UserDummyComponent from "./UserDummyComponent.tsx";

const UsersDummyComponent = () => {

    const [users, setUsers] = useState<IUserDummy[]>([])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
            .then(data => setUsers(data.users))
    },[])

    return (
        <div>
            {users.map(user => (<UserDummyComponent key={user.id} user={user} />))}
        </div>
    );
};

export default UsersDummyComponent;
