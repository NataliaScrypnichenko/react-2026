import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

// Створюю тип UserTypeProps, який описує властивості (props), що отримує компонент
type UserTypeProps={
    user:IUser// user — об'єкт поста типу IPost
};

// Створюємо UserComponent для виведення даних
const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div className="user-card">
            {user.id} : {user.name} {user.username}
        </div>
    );
};

export default UserComponent;
