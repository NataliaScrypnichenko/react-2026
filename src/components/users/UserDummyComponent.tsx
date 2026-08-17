import type {FC} from "react";

import type {IUserDummy} from "../../model/users/IUserDummy.tsx";


type TypePropsUserDummy = {
    user:IUserDummy
}

const UserDummyComponent:FC<TypePropsUserDummy> = ({user}) => {
    return (
        <div>
           <div>
               <h2>{user.firstName}</h2>
           </div>
        </div>
    );
};

export default UserDummyComponent;
