import {Link, Outlet} from "react-router-dom";


const UsersPage = () => {

    return (
        <div>
            <h1>Users</h1>
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
            <hr/>

        </div>
    );
};

export default UsersPage;
