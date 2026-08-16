import {Link, Outlet} from "react-router-dom";


const MenuLayout = () => {
        return (
            <div>
                    <ul>
                            <li><Link to={"users"}>Users </Link></li>
                            <li><Link to={'post'}>Posts</Link></li>
                            <li><Link to={"comment"}>Comment</Link></li>
                        <hr/>
                            {/*<li><Link to={"jsonplaceholder"}>jsonplaceholder</Link></li>*/}
                            {/*<li><Link to={"dummyjson"}>dummyjson</Link></li>*/}
                    </ul>
                    <hr/>
                    <Outlet/>
            </div>
        );
};

export default MenuLayout;
