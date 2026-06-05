import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./componets/my-product/MyProduct.tsx";

// можна показати циклом ітерувати через ф-ю map, обов'язково потрібно додавати ключ якщо він не існує key={index}
function App() {

  return (
    <>
      {
        products.map((product,index) =><MyProduct key={index} product={product}/>)
      }
    </>
  )
}

export default App
