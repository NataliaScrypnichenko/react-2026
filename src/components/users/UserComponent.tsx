import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

type UserTypeProps={
    item: IUser
};

const UserComponent:FC<UserTypeProps> = ({item}) => {
    //хук який видає об1єкт 
    const navigate = useNavigate();

    const handelOnClick = ()=>{
        //сюди передаємо шлях куди переходити і об'єкт опшен
       navigate('details',{state:item})
    };
    return (
        <div>
           <Link to={'details'} state={item}>{item.name}</Link>
            <button onClick={handelOnClick}> go to details</button>
        </div>
    );
};

export default UserComponent;
