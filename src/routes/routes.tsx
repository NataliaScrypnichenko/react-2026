import {createBrowserRouter} from "react-router";
import MainLayout from "../mainLayout/MainLayout.tsx";
import HomePage from "../page/HomePage.tsx";
import LoginPage from "../page/LoginPage.tsx";
import AuthResourcesPage from "../page/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>,children:[
            {index:true, element:<HomePage/>},
            {path:'login', element:<LoginPage/>},
            {path: "/auth/resources", element: <AuthResourcesPage/>}
        ]}
]);
