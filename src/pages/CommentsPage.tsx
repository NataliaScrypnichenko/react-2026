import {Link, Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>

            <Outlet/>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default CommentsPage;
