import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const routers = createBrowserRouter([
        {path:'/',element:<Layout/>,children:[

                {path:'users',element:<UsersPage/>},
                {path:'posts',element:<PostsPage/>},
                {path:'comments', element:<CommentsPage/>},
                {path:'products',element:<ProductsPage/>}
            ]}
]

)
