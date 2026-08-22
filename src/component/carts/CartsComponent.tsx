import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {cartsService} from "../../service/carts.api.service.tsx";
import type {ICart} from "../../model/ICart.ts";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {


    const [carts, setCarts] = useState<ICart[]>([])

    const {userId} = useParams();//дістаємо userId
    // console.log(userId);
    useEffect(()=>{

        if (userId){
            cartsService.getAllCartsOfUserById(+userId)
                .then(value => setCarts(value));
        }


    },[userId])


    return (
        <div>
            {
                carts.map((cart:ICart)=>(<CartComponent cart={cart} key={cart.id}/>))
            }
        </div>
    );
};

export default CartsComponent;
