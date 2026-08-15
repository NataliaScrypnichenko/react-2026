import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/layout/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJsonplaceholderPage from "../pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../pages/UsersDummyjsonPage.tsx";
import PostsDummyjsonPage from "../pages/PostsDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../pages/PostsJsonplaceholderPage.tsx";
import CommentJsonplaceholderPage from "../pages/CommentJsonplaceholderPage.tsx";
import CommentDummyjsonPage from "../pages/CommentDummyjsonPage.tsx";

export const routers= createBrowserRouter([
    {path:'/',element:<Layout/> , children:[
            {path:'users',element:<UsersPage/>},
                    {path:'users/jsonplaceholder',element:<UsersJsonplaceholderPage/>},
                    {path: 'users/dummyjson',element:<UsersDummyjsonPage/>},

            {path: 'posts',element: <PostsPage/>},
                    {path:'posts/jsonplaceholder',element:<PostsJsonplaceholderPage/>},
                    {path: 'posts/dummyjson',element:<PostsDummyjsonPage/>},
            {path: 'comments',element: <CommentsPage/>},
                    {path: 'comment/jsonplaceholder',element: <CommentJsonplaceholderPage/>},
                    {path: 'Comment/dummyjson',element:<CommentDummyjsonPage/>},
        ]},
]);
