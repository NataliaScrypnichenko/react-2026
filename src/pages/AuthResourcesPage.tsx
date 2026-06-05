import {useEffect} from "react";
import {LoadAuthProducts} from "../services/api.service.ts";


const AuthResourcesPage = () => {

    useEffect(()=>{
        LoadAuthProducts()
            .then(product=>console.log(product))

    },[])

    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;
