import UsersComponent from "../component/user/UsersComponent.tsx";
import {Outlet} from "react-router";



const UsersPage = () => {
    return (
        <div>
            UsersPage
            <UsersComponent/>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default UsersPage;
