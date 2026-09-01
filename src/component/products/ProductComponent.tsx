import type {FC} from "react";
import type {IProduct} from "../../model/IProduct.ts";
import "./ProductComponent.css";

type TypePropsProduct={
    product: IProduct,
}


const ProductComponent:FC<TypePropsProduct> = ({product}) => {
    return (
        <div className="product-card">

            <p>
                {product.id} {product.title}
            </p>

            <div className="product-images">
                {product.images.map((image) => (
                    <img
                        key={image}
                        src={image}
                        alt={product.title}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductComponent;
