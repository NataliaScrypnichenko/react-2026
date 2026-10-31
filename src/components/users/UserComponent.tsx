import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";


type UsersTypeProps={
    user: IUser,
}

const UserComponent:FC<UsersTypeProps> = ({user}) => {
    return (
        <div>
            {
                <div>{user.id}:{user.name} {user.username}</div>
            }
        </div>
    );
};

export default UserComponent;
