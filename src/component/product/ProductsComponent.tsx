import {useEffect} from "react";
import {loadAuthProduct, refresh} from "../../service/api.servise.ts";

const ProductsComponent = () => {
    useEffect(() => {
        loadAuthProduct()
            .then(products=> {
                console.log(products);
            }).catch(reason => {//якщо помилка тобто не працє токен то виконується refresh
            console.log(reason);
            refresh()
                .then(()=> {
                    loadAuthProduct()//знову викликає продукти
                        .then(value => console.log(value))
                });
        });

    }, []);

    return (
        <div>

        </div>
    );
};

export default ProductsComponent;
