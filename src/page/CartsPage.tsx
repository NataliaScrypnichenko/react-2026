import CartsComponent from "../component/carts/CartsComponent.tsx";
import {Outlet} from "react-router";


const CartsPage = () => {
    return (
        <div>
            CartsPage
            <CartsComponent/>
            <Outlet/>
        </div>
    );
};

export default CartsPage;
