import {Link} from "react-router";


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'carts'}>Carts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
