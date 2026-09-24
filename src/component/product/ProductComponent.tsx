import type {FC} from "react";
import type {IProduct} from "../../model/IProduct.ts";
import './ProductComponent.css'

export type ProductPropsType={
    product: IProduct;
};

const ProductComponent:FC<ProductPropsType> = ({product}) => {
    return (
        <div className="product">
            <img src={product.thumbnail} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p className="price">${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default ProductComponent;
