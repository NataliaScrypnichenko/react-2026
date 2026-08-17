import {type FC} from "react";
import type {IUserJson} from "../../model/users/IUserJson.ts";


type TypePropsUserJson = {
    user:IUserJson;
}

const UserJsonComponent:FC<TypePropsUserJson> = ({user}) => {
    return (
        <div>
            {
           user.name
            }
        </div>
    );
};

export default UserJsonComponent;
