import {useEffect, useState} from "react";
import {getProduct} from "../../service/api.service.tsx";
import type {ProductModel} from "../../models/ProductModel.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";
import './ProductsComponent.css'

const ProductsComponent = () => {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        getProduct()
            .then(value =>setProducts(value));

    },[]);

    return (
        <div className="products">
            {
                products.map(product => <ProductComponent product={product} key={product.id} />)
            }
        </div>
    );
};

export default ProductsComponent;
