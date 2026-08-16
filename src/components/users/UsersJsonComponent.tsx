import {useEffect, useState} from "react";
import type {IUserJson} from "../../model/IUserJson.ts";
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

            <h2>Users JSONPlaceholder</h2>

            {users.map(user => (<UserJsonComponent key={user.id} user={user} />))}

        </div>
    );
};
export default UsersJsonplaceholder;
