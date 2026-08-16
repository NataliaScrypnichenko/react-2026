import UsersJsonComponent from "../../components/users/UsersJsonComponent.tsx";
import {Outlet} from "react-router-dom";


const UserJsonplaceholderPage = () => {
    return (
        <div>
             <UsersJsonComponent/>
             <Outlet/>
        </div>
    );
};

export default UserJsonplaceholderPage;
