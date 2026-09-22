import {Outlet} from "react-router";
import Menu from "../component/menu/Menu.tsx";



const MainLayout = () => {
    return (
        <div>
            <Menu/>
             <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
