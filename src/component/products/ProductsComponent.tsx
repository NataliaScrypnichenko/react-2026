import {useEffect, useState} from "react";
import type {IProduct} from "../../model/IProduct.ts";
import {useSearchParams} from "react-router-dom";
import {getProducts} from "../../service/api.servise.tsx";
import ProductComponent from "./ProductComponent.tsx";
import type {IResponseProduct} from "../../model/IResponseProduct.ts";


const ProductsComponent = () => {

    const [query] = useSearchParams({page:'1'});

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const currentPage=query.get('page') || '1';
        getProducts(currentPage)
            .then(({products}:IResponseProduct)=> {
                setProducts(products)
            });

    },[query]);

    return (
        <div>
            {
                products.map((product: IProduct) =><ProductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};

export default ProductsComponent;
