import {Outlet} from "react-router-dom";
import PlaginationComponent from "../component/plagination/PlaginationComponent.tsx";


const LayoutPagination = () => {
    return (
        <div>
            <Outlet/>
            LayoutPagination
            <PlaginationComponent/>
            <hr/>
        </div>
    );
};

export default LayoutPagination;
