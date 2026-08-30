import {useEffect, useState} from "react";
import type {IProduct} from "../../model/IProduct.ts";
import {useSearchParams} from "react-router-dom";
import {getProducts} from "../../service/api.servise.tsx";
import PoductComponent from "./PoductComponent.tsx";


const PoductsComponent = () => {


    const [products, setProducts] = useState<IProduct[]>([]);

    const [query] = useSearchParams({page:'1'});

    useEffect(() => {
        const currentPage=query.get('page') || '1'
        getProducts(currentPage)
        .then(value => setProducts(value.products))

    },[query]);

    return (
        <div>
            {
                products.map((product: IProduct) =><PoductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};

export default PoductsComponent;
