import {useEffect,} from "react";
import {loadAuthProduct} from "../../service/api.servise.ts";


const ProductsComponent = () => {

    useEffect(() => {
        loadAuthProduct()
            .then(value => console.log(value))
    }, []);
    return (
        <div>
44
        </div>
    );
};

export default ProductsComponent;
