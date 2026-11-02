import {useSelector} from "react-redux";
import type {store} from "../store/store.ts";

// Хук автоматично отримує типізацію, яка дозволяє отримувати дані зі store
export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof store.getState>>();
