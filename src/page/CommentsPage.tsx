import {Link, Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>
            <h1>Comments</h1>
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

export default CommentsPage;
