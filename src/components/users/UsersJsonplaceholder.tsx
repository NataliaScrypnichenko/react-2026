import {useEffect, useState} from "react";
import type {IUserJson} from "../../models/IUserJson.ts";
import UserJsonplaceholderComponent from "./UserJsonplaceholderComponent.tsx";



const UsersJsonplaceholder = () => {

    const [users, setUsers] = useState<IUserJson[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(item => setUsers(item));
    })

    return (
        <div>
            {
                users.map((item) => (<UserJsonplaceholderComponent key={item.id} item={item} />))

            }
        </div>
    );
};

export default UsersJsonplaceholder;


