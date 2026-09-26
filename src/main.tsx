import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {routes} from "./routes/routes.tsx";

// createRoot знаходить HTML-елемент з id="root",
// у який React буде завантажувати весь наш додаток.
// "!" означає, що ми повідомляємо TypeScript:
// цей елемент точно існує в index.html.
createRoot(document.getElementById('root')!)
    // RouterProvider отримує наш router і запускає маршрутизацію React-додатка.
    // Тобто React буде визначати, який компонент показувати
    // залежно від поточного URL.
    .render(<RouterProvider router={routes}/>)
