import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

// Створюю тип властивостей (props) компонента
type UserTypeProps={
    user:IUser
};
// Створюємо функціональний компонент UserComponent
// FC<UserTypeProps> вказує, що компонент отримує props типу UserTypeProps
const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {
                <div>{user.id} : {user.name} {user.username}</div>
            }
        </div>
    );
};

export default UserComponent;
