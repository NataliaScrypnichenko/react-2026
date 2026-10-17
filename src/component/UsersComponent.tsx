import {useMyEfect} from "../hooks/useMyEfect.tsx";
import UserComponent from "./UserComponent.tsx";
import type {IUser} from "../model/IUser.ts";


const UsersComponent = () => {

    const users = useMyEfect<IUser[]>('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            {
                users &&
                users.map((user) => (<UserComponent user={user} key={user.id} />))}
        </div>
    );
};

export default UsersComponent;
