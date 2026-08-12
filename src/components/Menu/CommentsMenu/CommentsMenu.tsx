import {Link, Outlet} from "react-router-dom";


const CommentsMenu = () => {
    return (
        <div>

            <Outlet/>
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li>
                    <Link to={'dummyjson'}>dummyjson</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default CommentsMenu;
