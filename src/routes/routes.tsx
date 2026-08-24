import {createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import UsersPage from "../page/UsersPage.tsx";
import CartsPage from "../page/CartsPage.tsx";

export const routes=createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path:'users',element:<UsersPage/>},
            {path: 'carts/:id',element: <CartsPage/>}
        ]}
]);
