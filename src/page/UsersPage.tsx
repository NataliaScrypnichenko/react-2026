import UsersComponent from "../component/user/UsersComponent.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div>
           <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
