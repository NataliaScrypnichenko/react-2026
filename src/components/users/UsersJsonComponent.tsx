import {useEffect, useState} from "react";
import type {IUserJson} from "../../model/users/IUserJson.ts";
import UserJsonComponent from "./UserJsonComponent.tsx";
import {serviceJson} from "../../services/api.service.ts";


const UsersJsonplaceholder = () => {

    const [users, setUsers] = useState<IUserJson[]>([]);


    useEffect(() => {

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
       serviceJson.getUsers()
            .then((allUsers) =>{
                setUsers(allUsers)
            } );

    }, []);

    return (
        <div>

            {users.map(user => (<UserJsonComponent key={user.id} user={user} />))}

        </div>
    );
};
export default UsersJsonplaceholder;
