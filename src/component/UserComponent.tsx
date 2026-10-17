import type {FC} from "react";
import type {IUser} from "../model/IUser.ts";

type TypeUsersProps={
    user:IUser
}

const UserComponent : FC<TypeUsersProps> = ({user}) => {
    return (
        <div>
                <p>{user.id}: {user.name} {user.username}</p>
        </div>
    );
};

export default UserComponent;
