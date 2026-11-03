// Імпортую createRoot для створення кореневого елемента React-застосунку
import { createRoot } from 'react-dom/client'

// Імпортую головний CSS-файл зі стилями застосунку
import './index.css'

// Імпортую Provider для підключення Redux Store до всього React-застосунку
import { Provider } from "react-redux";

// Імпортую створене Redux Store, у якому зберігаються користувачі, пости та коментарі
import { store } from "./redux/store/store.ts";

// Імпортую налаштовані маршрути застосунку
import { routes } from "./routes/routes.tsx";

// Імпортую RouterProvider для підключення маршрутизації до React-застосунку
import { RouterProvider } from 'react-router';

// За допомогою createRoot знаходжу HTML-елемент з id="root",
// у якому буде відображатися весь React-застосунок
// createRoot створює кореневий елемент React, у якому буде працювати застосунок.
// document.getElementById('root') знаходить HTML-елемент з ідентифікатором root у файлі index.html.
// ! — оператор TypeScript, який повідомляє, що цей елемент не є null.
// .render() Метод, який відображає React-застосунок у знайденому HTML-елементі.
createRoot(document.getElementById('root')!).render(

    // Provider підключає Redux Store і робить його доступним для всіх дочірніх компонентів
    // Підключає Redux Store до React-застосунку.Завдяки цьому компоненти можуть використовувати
    // useAppSelector та useAppDispatch.
    // Лівий store — це назва властивості компонента Provider.
    // Правий store — це змінна, яку ми імпортували з файлу store.ts.
    <Provider store={store}>

        {/*// RouterProvider підключає маршрути, за якими відбувається перехід між сторінками
        він отримує інформацію про всі маршрути та визначає,
        який компонент потрібно показати користувачу залежно від адреси сторінки
        router зліва — назва властивості компонента RouterProvider.
        routes справа — твоя змінна, яку ти імпортувала з файлу routes.tsx.
        */}
        <RouterProvider router={routes}/>

    </Provider>
);
