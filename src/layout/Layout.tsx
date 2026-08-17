import MenuLayout from "../components/menu/MenuLayout.tsx";
import {Outlet} from "react-router-dom";



const Layout = () => {
    return (
        <div>
              <MenuLayout/>
            <hr/>
               <Outlet/>
        </div>
    );
};

export default Layout;
