import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                {/* Link змінює URL без повного перезавантаження сторінки.
                    "/" відкриває HomePage. */}
                <li><Link to='/'>Home</Link></li>

                {/* При натисканні переходимо на "/login",
                    де router відкриє LoginPage. */}
                <li><Link to='/login'>Login</Link></li>

                {/* При натисканні переходимо на "/auth/resources",
                    де router відкриє AuthResourcesPage. */}
                <li><Link to='/auth/resources'>Resources</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
