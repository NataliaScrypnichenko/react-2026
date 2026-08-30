import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu.tsx";


const Layout = () => {
    return (
        <div>
            <Outlet/>
            <Menu/>
            <hr/>
        </div>
    );
};

export default Layout;
