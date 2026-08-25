import {type FC} from "react";
import type {IUser} from "../../model/IUser.ts";
import "./UserComponent.css"
import {useNavigate} from "react-router";

type TypeUserProps = {
    user: IUser;
}

const UserComponent:FC<TypeUserProps> = ({user}) => {

    const navigate = useNavigate();
    const onButtonClickHandelNavigate =( () => {
        navigate(`/carts/user/${user.id}`)
    });

    return (
        <div>
            <div className={'div_user'}>
                <h2>{user.id}={user.username} {user.firstName}</h2>
                <button onClick={onButtonClickHandelNavigate}>basket of groceries</button>
            </div>
        </div>
    );
};

export default UserComponent;
