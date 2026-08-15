import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import UserPage from "../page/user/UserPage.tsx";
import UserJsonplaceholderPage from "../page/user/UserJsonplaceholderPage.tsx";
import UserDummyjsonPage from "../page/user/UserDummyjsonPage.tsx";
import PostsPage from "../page/post/PostsPage.tsx";
import PostsDummyjsonPage from "../page/post/PostsDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../page/post/PostsJsonplaceholderPage.tsx";
import CommentsPage from "../page/comment/CommentsPage.tsx";
import CommentsJsonplaceholderPage from "../page/comment/CommentsJsonplaceholderPage.tsx";
import CommentsDummyjsonPage from "../page/comment/CommentsDummyjsonPage.tsx";

export const routers = createBrowserRouter([
        {path:'/', element:<Layout/>, children:[
                {path:'user',element:<UserPage/>, children:[
                        {path:'jsonplaceholder', element:<UserJsonplaceholderPage/>},
                        {path:'dummyjson',element:<UserDummyjsonPage/>}
                    ]},
                {path:'posts',element:<PostsPage/>, children:[
                        {path:'jsonplaceholder', element:<PostsJsonplaceholderPage/>},
                        {path:'dummyjson',element:<PostsDummyjsonPage/>}
                    ]},
                {path:'comments',element:<CommentsPage/>, children:[
                        {path:'jsonplaceholder', element:<CommentsJsonplaceholderPage/>},
                        {path:'dummyjson',element:<CommentsDummyjsonPage/>}
                    ]},
            ]},
]
);
