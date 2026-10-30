import {useSelector} from "react-redux";
import {store} from "../store.ts";

//тож створюємо хук яий сам буде діставати типізацію з usersSlice сховища
export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof store.getState>>();
