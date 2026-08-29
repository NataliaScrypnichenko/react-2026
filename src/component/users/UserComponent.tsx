import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

type TypePropsUser = {
    user: IUser;
}

const UserComponent:FC<TypePropsUser> = ({user}) => {
    return (
        <div>
              <p>{user.username} {user.firstName}</p>
            <img src={user.image} alt={user.image}/>
        </div>
    );
};

export default UserComponent;
