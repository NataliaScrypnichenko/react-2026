import {Link} from "react-router-dom";
import {Outlet} from "react-router";




const MenuUsers = () => {
    return (
        <div>
            <Outlet/>
            {/*<hr/>*/}
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>dummyjson</Link>
                </li>
            </ul>

        </div>
    );
};

export default MenuUsers;
