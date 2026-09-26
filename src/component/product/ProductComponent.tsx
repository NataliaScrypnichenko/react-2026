// Імпортуємо FC — тип React для функціонального компонента.
// FC дозволяє вказати, які props отримує компонент.
import type {FC} from "react";
// Підключаємо CSS-файл для стилізації компонента ProductComponent.
import './ProductComponent.css'

// Імпортуємо модель IProduct.
// Вона описує структуру об'єкта product,
// який компонент отримує через props.
import type {IProduct} from "../../models/IProduct.ts";


// Створюємо тип props компонента.
//
// product — це об'єкт типу IProduct.
// Завдяки цьому TypeScript знає,
// які поля можна використовувати:
// product.id, product.title, product.price тощо.
export type ProductPropsType={
    product: IProduct;
};


// Створюємо функціональний React-компонент.
//
// FC<ProductPropsType> означає,
// що цей компонент отримує props,
// структура яких описана в ProductPropsType.
//
// {product} — деструктуризація props.
// Замість props.product одразу отримуємо product.
const ProductComponent:FC<ProductPropsType> = ({product}) => {
    return (
        <div className="product">
            <img src={product.thumbnail} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p className="price">${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default ProductComponent;
