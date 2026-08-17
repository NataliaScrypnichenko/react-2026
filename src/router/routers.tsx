import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import UserPage from "../page/UserPage.tsx";
import PostsPage from "../page/PostsPage.tsx";
import CommentsPage from "../page/CommentsPage.tsx";
import UsersJsonComponent from "../components/users/UsersJsonComponent.tsx";
import UsersDummyComponent from "../components/users/UsersDummyComponent.tsx";
import PostsDummyjsonComponent from "../components/posts/PostsDummyjsonComponent.tsx";
import PostsJsonComponent from "../components/posts/PostsJsonComponent.tsx";
import CommentsJsonComponent from "../components/comments/CommentsJsonComponent.tsx";
import CommentsDummyjsonComponent from "../components/comments/CommentsDummyjsonComponent.tsx";

export const routers = createBrowserRouter([
        {path:'/', element:<Layout/>, children:[
                {path:'users',element:<UserPage/>, children:[
                        {path:'jsonplaceholder', element:<UsersJsonComponent/>},
                        {path:'dummyjson',element:<UsersDummyComponent/>}
                    ]},
                {path:'posts',element:<PostsPage/>, children:[
                        {path:'jsonplaceholder', element:<PostsJsonComponent/>},
                        {path:'dummyjson',element:<PostsDummyjsonComponent/>}
                    ]},
                {path:'comments',element:<CommentsPage/>, children:[
                        {path:'jsonplaceholder', element:<CommentsJsonComponent/>},
                        {path:'dummyjson',element:<CommentsDummyjsonComponent/>}
                    ]},
            ]},
]
);
