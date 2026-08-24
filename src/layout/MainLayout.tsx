import {Outlet} from "react-router";
import Menu from "../menu/Menu.tsx";


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
