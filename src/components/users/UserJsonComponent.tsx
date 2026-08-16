import {type FC} from "react";
import type {IUserJson} from "../../model/IUserJson.ts";


type TypePropsUserJson = {
    user:IUserJson;
}

const UserJsonComponent:FC<TypePropsUserJson> = ({user}) => {
    return (
        <div>
            {
           user.id
            }
        </div>
    );
};

export default UserJsonComponent;
