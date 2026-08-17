import {Link, Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            <h2>Posts</h2>
            <Outlet/>
            <hr/>
            <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
            <br/>
            <Link to={'dummyjson'}>dummyjson</Link>
        </div>
    );
};

export default PostsPage;
