import {useLocation} from "react-router-dom";
import type {IUser} from "../../models/IUser.ts";


const SingleUserComponent = () => {
    //
    // const location = useLocation();
    // console.log(location);
    const {state} = useLocation();
    const user =state as IUser;//примусово видавати напряму інформацію-перший варіант

    return (
        <div>
            {/*{JSON.stringify(state)}*/}
            {user.name}={user.username}
        </div>
    );
};

export default SingleUserComponent;
