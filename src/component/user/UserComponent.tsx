import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

type TypePropsUsers = {
    user: IUser;
}

const UserComponent:FC<TypePropsUsers> = ({user}) => {
    return (
        <div>
           <div>
               <h1>{user.id}={user.username} {user.lastName} </h1>
               <p>{user.email}</p>
           </div>
        </div>
    );
};

export default UserComponent;
