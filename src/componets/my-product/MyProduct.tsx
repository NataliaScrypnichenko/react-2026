
import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";


 type MyPropType= {
   product: IProduct
};

const MyProduct:FC<MyPropType> = ({product}) => {
    return (
        <div className="product">
            <h2>{product.title}.{product.price}ua</h2>
            <img src={product.image} alt={product.title}/>
        </div>

    );
};

export default MyProduct;
