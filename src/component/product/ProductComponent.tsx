import type {FC} from "react";
import type {IProduct} from "../../model/IProduct.ts";

export type ProductPropsType={
    product: IProduct;
}

const ProductComponent:FC<ProductPropsType> = ({product}) => {
    return (
        <div>
            {product.title}
        </div>
    );
};

export default ProductComponent;
