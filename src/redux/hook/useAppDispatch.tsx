// Імпортую стандартний хук useDispatch з бібліотеки react-redux.
// Він дозволяє відправляти дії (actions) до Redux Store.
import { useDispatch } from "react-redux";

// Імпортую створене раніше спільне сховище Redux Store.
// Воно потрібне, щоб отримати тип його функції dispatch.
import { store } from "../store/store.ts";


// Створюю власний типізований хук useAppDispatch,
// який базується на стандартному хуку useDispatch-то бто він відправляє дії в store
// Він автоматично використовує тип dispatch із мого Redux Store.
// то б то у компонентах використовую useAppDispatch замість стандартного useDispatch, щоб не повторювати типізацію.
export const useAppDispatch =
    // withTypes дозволяє вказати власний тип для стандартного useDispatch.
    // typeof store.dispatch отримує тип функції dispatch із мого Store.
    // Завдяки цьому TypeScript знає, які дії та асинхронні дії можна відправляти до Redux Store.
    useDispatch.withTypes<typeof store.dispatch>();
