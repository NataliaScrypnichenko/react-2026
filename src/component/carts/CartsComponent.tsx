import {useParams} from "react-router";
import { useEffect, useState} from "react";
import type {ICart} from "../../model/ICart.ts";
import type {ICartsResponseModel} from "../../model/ICartsResponseModel.ts";
import CartComponent from "./CartComponent.tsx";
import './CartsComponent.css';


const CartsComponent = () => {
    const {id} = useParams();
    console.log(id);
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        // cartService.getAllCarts()
        fetch(`https://dummyjson.com/carts/user/${id}`)
        .then((value) =>value.json())
            .then(({carts}:ICartsResponseModel) => setCarts(carts))
    },[])


    return (

        <div className="carts_container">
            {
                carts.map((cart: ICart) => (<CartComponent key={cart.id} cart={cart} />))
            }
        </div>
    );
};

export default CartsComponent;
