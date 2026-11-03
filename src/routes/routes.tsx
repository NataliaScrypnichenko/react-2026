// Імпортую компонент UsersPage для відображення сторінки користувачів
import UsersPage from "../pages/UsersPage.tsx";

// Імпортую кореневий компонент App, який містить меню та Outlet
import App from "../App.tsx";

// Імпортую компонент PostsPage для відображення сторінки постів
import PostsPage from "../pages/PostsPage.tsx";

// Імпортую компонент CommentsPage для відображення сторінки коментарів
import CommentsPage from "../pages/CommentsPage.tsx";

// Імпортую компонент ComplexPage для відображення сторінки з користувачами, постами та коментарями
import ComplexPage from "../pages/ComplexPage.tsx";

// Імпортую createBrowserRouter для створення маршрутизатора з використанням адрес браузера
import { createBrowserRouter } from "react-router";

// Створюю маршрутизатор і налаштовую маршрути для переходу між сторінками
//export — дозволяє використовувати маршрутизатор в інших файлах.
// const routes — створюю змінну routes, у якій зберігатиметься налаштований маршрутизатор.
// createBrowserRouter — функція яка створює маршрутизатор для браузера.
//[...] — масив, у якому описуються маршрути застосунку.
export const routes = createBrowserRouter([

    {
        // Вказую кореневу адресу застосунку "/"
        path: "/",

        // Вказую компонент App, який буде батьківським для вкладених маршрутів
        element: <App/>,

        // children — це масив дочірніх маршрутів
        // Вказую масив вкладених маршрутів, які будуть відображатися всередині App через Outlet
        children: [

            {
                // Вказую адресу сторінки користувачів "/users"
                path: 'users',

                // Вказую компонент UsersPage, який відображається за адресою "/users"
                element: <UsersPage/>
            },

            {
                // Вказую адресу сторінки постів "/posts"
                path: 'posts',

                // Вказую компонент PostsPage, який відображається за адресою "/posts"
                element: <PostsPage/>
            },

            {
                // Вказую адресу сторінки коментарів "/comments"
                path: 'comments',

                // Вказую компонент CommentsPage, який відображається за адресою "/comments"
                element: <CommentsPage/>
            },

            {
                // Вказую адресу комплексної сторінки "/complex"
                path: 'complex',

                // Вказую компонент ComplexPage, який відображається за адресою "/complex"
                element: <ComplexPage/>
            }
        ]
    }
]);
