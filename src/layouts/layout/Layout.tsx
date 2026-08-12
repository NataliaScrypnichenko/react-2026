import {Outlet} from 'react-router'
import Menu from "../../components/Menu/Menu.tsx";

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
