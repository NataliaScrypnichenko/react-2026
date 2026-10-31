import {useSelector} from "react-redux";
import type {store} from "../store/store.ts";

//хук сам дістає типізацію, який дозволяє отримувати дані з store
export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof store.getState>>();
