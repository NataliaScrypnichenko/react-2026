import {useEffect,} from "react";
import {loadAuthProduct} from "../../service/api.servise.ts";


const ProductsComponent = () => {

    useEffect(() => {
        loadAuthProduct()
            .then(value => console.log(value))
    }, []);
    return (
        <div>

        </div>
    );
};

export default ProductsComponent;
