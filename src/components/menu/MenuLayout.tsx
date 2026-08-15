import {Link, Outlet} from "react-router-dom";



const MenuLayout = () => {
    return (
        <div>
            <Link to={'user'}>User</Link>
            <br/>
            <Link to="/users/jsonplaceholder">Users JSONPlaceholder</Link>
            <br/>
            <Link to="/users/dummyjson">Users DummyJSON</Link>

            <br/>

            <Link to="/posts/jsonplaceholder">Posts JSONPlaceholder</Link>

            <br/>

            <Link to="/posts/dummyjson">Posts DummyJSON</Link>

            <br/>

            <Link to="/comments/jsonplaceholder">Comments JSONPlaceholder</Link>

            <br/>
            <Link to="/comments/dummyjson">Comments DummyJSON</Link>

            <Outlet/>

        </div>
    );
};

export default MenuLayout;

