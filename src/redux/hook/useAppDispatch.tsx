import {useDispatch} from "react-redux";
import {store} from "../store/store.ts";

//створюю свій хук який автоматично типізує об'єкти
// Я створила власний типізований хук useAppDispatch, який базується на стандартному хуку useDispatch.
// За допомогою withTypes та typeof store.dispatch, я отримую тип dispatch із мого store.
// Це дозволяє TypeScript правильно перевіряти типи дій, які я відправляю в store,
// і допомагає уникати помилок типізації автоматично
export const useAppDispatch =
    useDispatch.withTypes<typeof store.dispatch>();
