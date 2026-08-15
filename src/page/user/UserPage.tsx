import {Outlet} from "react-router-dom";

const UsersPage = () => {

    return (
        <div>
            <h2>Users</h2>

            <Outlet/>
        </div>
    );
};

export default UsersPage;
