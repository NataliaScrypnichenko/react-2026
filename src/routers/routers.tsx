import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import JsonplaceholderPage from "../pages/JsonplaceholderPage.tsx";
import DummyjsonPage from "../pages/DummyjsonPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routers= createBrowserRouter([
    {path:'/',element:<Layout/> , children:[
            {path:'users',element:<UsersPage/> , children:[
                    {path:'jsonplaceholder',element:<JsonplaceholderPage/>},
                    {path: 'dummyjson',element:<DummyjsonPage/>}
                ]},
            {path: 'posts',element: <PostsPage/>, children:[
                    {path:'jsonplaceholder',element:<JsonplaceholderPage/>},
                    {path: 'dummyjson',element:<DummyjsonPage/>}
                ]},
            {path: 'comments',element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder',element: <JsonplaceholderPage/>}
                ]},
        ]},
]);
