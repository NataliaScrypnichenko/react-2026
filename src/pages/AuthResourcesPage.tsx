import {useEffect} from "react";
import {LoadAuthProducts, refresh} from "../services/api.service.ts";


const AuthResourcesPage = () => {

    useEffect(()=>{
        LoadAuthProducts()
            //зараз помилка 401 не дає дані,тому що вказано в сервері звраз так get<IProductsResponseModelType>('/products')
            // а потрібно по іншому,щоб отримати запити на певну урлу то
            .then(products=>console.log(products))

            // якщо щось стається то дається помилка і
            .catch(reason=> {
                console.log(reason)// виводим її
                //
                refresh().then( ()=>{
                   LoadAuthProducts().then(value => console.log(value))
                })
            })
    },[])

    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;
