import './CartComponent.css';
import type {FC} from "react";
import type {ICart} from "../../model/ICart.ts";

type TypePropsCart = {
    cart: ICart;
}

const CartComponent:FC<TypePropsCart> = ({cart}) => {

    return (
        <div className={"cart"}>
            <h3>Cart #{cart.id}</h3>

            <p>User ID: {cart.userId}</p>
            <p>Total: {cart.total}</p>
            <p>Discounted total: {cart.discountedTotal}</p>
            <p>Total products: {cart.totalProducts}</p>
            <p>Total quantity: {cart.totalQuantity}</p>

            <h4>Products:</h4>

            {
                cart.products.map(product => (
                    <div  className={'product'} key={product.id}>

                        <p>Product: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total: {product.total}</p>
                        <p>Discount: {product.discountPercentage}%</p>
                        <p>Discounted total: {product.discountedTotal}</p>

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            width="100"
                        />

                        <hr/>
                    </div>
                ))
            }

        </div>
    );
};

export default CartComponent;
