import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersPage from "../page/UsersPage.tsx";
import PostsPage from "../page/PostsPage.tsx";
import CommentsPage from "../page/CommentsPage.tsx";
import ComplexPage from "../page/ComplexPage.tsx";


 export const routes = createBrowserRouter([
     {
         path: "/", element: <App/>, children:[
             {path:"users",element:<UsersPage/>},
             {path:"posts",element:<PostsPage/>},
             {path:"comments",element:<CommentsPage/>},
             {path:'complex',element: <ComplexPage/>},

         ]
     }
 ]);
