import {useParams} from "react-router";
import { useEffect, useState} from "react";
import type {ICart} from "../../model/ICart.ts";
import type {ICartsResponseModel} from "../../model/ICartsResponseModel.ts";
import CartComponent from "./CartComponent.tsx";
import './CartsComponent.css';
import {cartService} from "../../sevice/api.service.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    console.log(id);
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        cartService.getAllCarts(Number(id))
            .then(({carts}:ICartsResponseModel) => setCarts(carts))
    },[id])


    return (

        <div className="carts_container">
            {
                carts.map((cart: ICart) => (<CartComponent key={cart.id} cart={cart} />))
            }
        </div>
    );
};

export default CartsComponent;
