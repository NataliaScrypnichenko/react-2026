import {Link, Outlet} from "react-router-dom";


const MenuUsers = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>dummyjson</Link>
                </li>
            </ul>

        </div>
    );
};

export default MenuUsers;
