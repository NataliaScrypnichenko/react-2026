import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout.tsx";
import UsersPage from "../page/UsersPage.tsx";
import PostsPage from "../page/PostsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element: <PostsPage/> }
        ]
    }
]);
