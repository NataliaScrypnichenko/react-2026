import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import CarsPage from "../page/CarsPage.tsx";
import CarsCreatPage from "../page/CarsCreatPage.tsx";

export const routes =createBrowserRouter([
    {path:'/',element:<App/>,children:[
            {path:'cars', element:<CarsPage/>},
            {path:'cars/create', element:<CarsCreatPage/>}
        ]}
])
