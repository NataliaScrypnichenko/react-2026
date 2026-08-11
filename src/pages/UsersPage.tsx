import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
