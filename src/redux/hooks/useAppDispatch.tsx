import {useDispatch} from "react-redux";
import type {store} from "../store.ts";


//2.1= створюємо свій власний хук для хука useDispatch який знаходиться на сторінці UsersPage тобто обгортку.
// (типізація) через useDispatch викликаємо в неї функцію withTypes ()і типізуємо <typeof store.dispatch>
export const useAppDispatch =
    useDispatch.withTypes<typeof store.dispatch>();
