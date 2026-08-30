import {Outlet} from "react-router-dom";
import PlaginationComponent from "../component/plagination/PlaginationComponent.tsx";


const LayoutPagination = () => {
    return (
        <div>
            <PlaginationComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default LayoutPagination;
