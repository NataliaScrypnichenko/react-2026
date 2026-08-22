import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";
import { useNavigate} from "react-router";


type TypePropsUsers = {
    user:IUser

}

const UserComponent:FC<TypePropsUsers> = ({user}) => {

    const navigate = useNavigate();
    const handleOnClicK=()=>{
            navigate('carts/'+user.id, {state:user})
    }
    return (
        <div>
                <p>{user.id} {'  '} {user.username}</p>
            <button onClick={handleOnClicK}>carts</button>

        </div>
    );
};

export default UserComponent;
