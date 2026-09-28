import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https:/https://jsonplaceholder.typicode.com//users')
            .then(res => res.json())
            .then(value => setUsers(value));

        return ()=> {
            console.log('unsubscribe');
        }


    }, []);

    return (
        <div>

            <UserComponent/>
        </div>
    );
};

export default UsersComponent;
