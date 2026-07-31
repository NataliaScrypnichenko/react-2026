import type {FC} from "react";
import type {IUser} from "../../moduls/IUser.ts";

 type UserPropType = {
     item:IUser;
 };

export const UserComponent:FC<UserPropType> = ({item})=> {

    return (
        <>
            {
                <div >{item.name}</div>
            }
        </>
    )
};
export default UserComponent;


