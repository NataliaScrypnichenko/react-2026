import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import CarsPage from "../page/CarsPage.tsx";
import CreatePage from "../page/CreatePage.tsx";

export const routers = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'cars', element:<CarsPage/>},
            {path:'cars/create', element:<CreatePage/>}
        ]}
])
