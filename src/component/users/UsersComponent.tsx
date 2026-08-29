import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../model/IUser.ts";
import {getAllUsers} from "../../service/api.service.tsx";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg');
          getAllUsers(pg || '')
              .then(value => setUsers(value.data))

    }, [query]);
    return (
        <div>
            {
              users.map((value) => <UserComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
