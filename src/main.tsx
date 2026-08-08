import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import BPage from "./components/page/BPage.tsx";
import APage from "./components/page/APage.tsx";
import HomePage from "./components/page/HomePage.tsx";
import CPage from "./components/page/CPage.tsx";
import DPage from "./components/page/DPage.tsx";

const router= createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,
         children:[
             {path: '', element:<HomePage/>},//дефолтна де нічого не відображається тобто батьківська сторінка
             {path:'a', element:<APage/>},
             {path:'b', element:<BPage/>, children:[
                     {path:'d',element:<DPage/>},
                     {path:'c',element:<CPage/>}
                 ]},

         ]
    },

]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>

)
