import {useEffect, useState} from "react";
import {loadAuthProduct, refresh} from "../../service/api.servise.ts";
import type {IProduct} from "../../model/IProduct.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        loadAuthProduct()
            .then(products=> {
                console.log(products);
                setProducts(products);
            }).catch(reason => {//якщо помилка тобто не працє токен то виконується refresh
            console.log(reason);
            refresh()
                .then(()=> {
                    loadAuthProduct()//знову викликає продукти
                        .then(value => {
                            console.log(value)
                            setProducts(value)
                        })
                });
        });

    }, []);

    return (
        <div>
            {
                products.map((product) => (<ProductComponent product={product} key={product.id} />))
            }
        </div>
    );
};

export default ProductsComponent;
