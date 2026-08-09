import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserTypeProps={
    item: IUser
};

const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            <div>{item.name}{' '} {item.username}</div>
        </div>
    );
};

export default UserComponent;
