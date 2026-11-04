// Імпортую стандартний хук useSelector з бібліотеки react-redux.
// Він дозволяє отримувати потрібні дані зі спільного Redux Store.
import { useSelector } from "react-redux";

// Імпортую тільки тип store з файлу головного сховища.
// Він потрібен для отримання типу структури всього стану Redux Store.
import type { store } from "../store/store.ts";


// Створюю власний типізований хук useAppSelector.
// за допомогую стандартному хуку useSelector,який дозволяє React-компоненту отримувати
// (читати) потрібні дані зі спільного сховища тобто читати дані
export const useAppSelector =

    // withTypes дозволяє створити типізовану версію стандартного useSelector.
    // typeof store.getState отримує тип функції, яка повертає весь стан Store.
    // ReturnType отримує тип значення, яке повертає ця функція.
    // У результаті TypeScript знає структуру всього Redux Store.
    useSelector.withTypes<ReturnType<typeof store.getState>>();
