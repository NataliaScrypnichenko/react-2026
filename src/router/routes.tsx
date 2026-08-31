import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout.tsx";
import LayoutPagination from "../layout/LayoutPagination.tsx";
import ProductsPage from "../page/ProductsPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element:<Layout/>,children:[
            {path:'',element:<LayoutPagination/>,children:[
                    {path:'products', element:<ProductsPage/>}
                ]}
        ]}
]);
