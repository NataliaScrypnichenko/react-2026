import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadAuthProduct, refresh} from "../../service/api.servise.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {

    // products зберігає масив отриманих продуктів.
    // Початкове значення — порожній масив,
    // тому до отримання даних products.map() не викличе помилку.
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {

        // Спочатку намагаємося отримати продукти.
        // loadAuthProduct робить GET-запит до API.
        loadAuthProduct()

            // Перший then виконується після успішного отримання продуктів.
            // products — це результат loadAuthProduct().
            .then(products=> {

                // Перевіряємо отримані дані в консолі.
                console.log(products);

                // Записуємо отримані продукти у state.
                setProducts(products);

                // catch виконується, якщо отримання продуктів завершилося помилкою.
            }).catch(reason => {

            // Виводимо причину помилки.
            console.log(reason);

            // Якщо токен більше не працює,
            // викликаємо refresh(), щоб отримати нові токени.
            refresh()

                // Цей then виконається тільки після завершення refresh().
                //
                // Тобто це два послідовні кроки:
                // 1. спочатку оновлюємо токен;
                // 2. потім знову запитуємо продукти.
                .then(()=> {

                    // Після успішного оновлення токена
                    // повторно викликаємо запит продуктів.
                    loadAuthProduct()

                        // Цей then виконується після завершення
                        // повторного loadAuthProduct().
                        .then(value => {

                            // Перевіряємо отримані продукти.
                            console.log(value)

                            // Записуємо нові дані в state.
                            setProducts(value)
                        })
                });
        });

        // Запит виконується один раз після монтування компонента.
    }, []);

    return (
        <div>
            {
                // Перебираємо масив продуктів.
                // Для кожного продукту створюємо ProductComponent.
                products.map((product) => (

                    // Передаємо конкретний product через props.
                    // key потрібен для правильного відстеження елементів списку.
                    <ProductComponent product={product} key={product.id} />

                ))
            }
        </div>
    );
};

export default ProductsComponent;
