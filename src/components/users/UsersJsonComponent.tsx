import {useEffect, useState} from "react";
import type {IUserJson} from "../../model/users/IUserJson.ts";
import UserJsonComponent from "./UserJsonComponent.tsx";


const UsersJsonplaceholder = () => {

    const [users, setUsers] = useState<IUserJson[]>([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);

    return (
        <div>

            {users.map(user => (<UserJsonComponent key={user.id} user={user} />))}

        </div>
    );
};
export default UsersJsonplaceholder;
