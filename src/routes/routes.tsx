import UsersPage from "../pages/UsersPage.tsx";
import App from "../App.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";
import { createBrowserRouter } from "react-router";

// прописую маршрути роутера
export const routes = createBrowserRouter([
    {
        path: "/",element:<App/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'complex', element:<ComplexPage/>}
        ]
    }
]);

