import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import SingleUserDetailsPage from "../pages/SingleUserDetailsPage.tsx";
import PostsUsersPage from "../pages/PostsUsersPage.tsx";

export const routers=createBrowserRouter([
    {path:'', element:<Layout/>, children:[
            // {path:'',element:<HomePage/>},//базва урлу її можна показати іншим шляхом
            {index:true,element:<HomePage/>},
            {
                path:'users', element:<UsersPage/> , children:[
                    {path:'posts/:userId',element:<PostsUsersPage/>},//шлях конкретного UserId це патер :UserId
                ]
            },
            {path:'users/details', element:<SingleUserDetailsPage/>},
            {path:'posts',element:<PostsPage/>},
        ] }
])
