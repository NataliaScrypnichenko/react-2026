import {Outlet} from "react-router";
import Menu from "../menu/Menu.tsx";


const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default Layout;
