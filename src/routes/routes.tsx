import {createBrowserRouter} from "react-router";
import MainLayout from "../mainLayout/MainLayout.tsx";
import LoginPage from "../page/LoginPage.tsx";
import HomePage from "../page/HomePage.tsx";
import AuthResourcesPage from "../page/AuthResourcesPage.tsx";


// Створюємо маршрутизатор нашого додатка.
// createBrowserRouter дозволяє пов'язати URL з конкретними React-компонентами.
export const routes = createBrowserRouter([
    {
        // Головний маршрут нашого додатка.
        path:'/',
        // MainLayout є батьківським компонентом
        // для всіх дочірніх сторінок.
        element:<MainLayout/>, children:[{
            // index:true означає головну сторінку для маршруту "/".
            // index:true означає, що HomePage відкривається
            // при переході на головний URL "/".
            index:true,
            element:<HomePage/>
        },
       {
           // Сторінка авторизації відкривається за URL "/login".
              path:'login',
              element:<LoginPage/>
       },
       {
           // Захищені ресурси відкриваються за URL "/auth/resources".
           // відображається AuthResourcesPage.
            path: "/auth/resources",
            element: <AuthResourcesPage/>
       }
       ]
    }
]);
