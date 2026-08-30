import type {FC} from "react";
import type {IProduct} from "../../model/IProduct.ts";

type TypePropsProduct={
    product: IProduct,
}


const PoductComponent:FC<TypePropsProduct> = ({product}) => {
    return (
        <div>
            <p>{product.id}{product.title}</p>
            {/*<img src={product.images} alt={product.images}/>*/}
        </div>
    );
};

export default PoductComponent;
