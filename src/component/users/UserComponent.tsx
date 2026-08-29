import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

type TypePropsUser = {
    item: IUser;
}

const UserComponent:FC<TypePropsUser> = ({item}) => {
    return (
        <div>
            <div>
                <h2> {item.last_name} {item.first_name}</h2>
                <img src={item.avatar} alt={item.avatar}/>
            </div>
        </div>
    );
};

export default UserComponent;
