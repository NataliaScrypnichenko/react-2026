import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

// в головному файлі визначаю контекст на яких рівнях буде працювати наше сховище / тобто які компоненти зможуть
// його бачити, зараз це найвища точка.Для цього потрібні відповідні програми під ключити
// 1.будь-яка сторінка layout яка буде рендиритися в первинному аутлеті, вони всі спроможні будуть між собою ділити сховище
// Provider store={}-тут є пропса store={} вона поста і це є звісно посилання на наше сховище

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
                     <RouterProvider router={router}/>
            </Provider>
);
