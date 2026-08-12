import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
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

export default PostsPage;
