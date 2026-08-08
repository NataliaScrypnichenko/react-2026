import {Link, Outlet} from "react-router-dom";


const BPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'d'}>DPage</Link></li>
                <li><Link to={'c'}>CPage</Link></li>
            </ul>

            <hr/>

            <Outlet/>
        </div>
    );
};

export default BPage;
