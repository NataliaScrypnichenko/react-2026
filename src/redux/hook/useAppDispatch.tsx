import {useDispatch} from "react-redux";
import {store} from "../store/store.ts";

//створюю свій хук який автоматично типізує об'єкти
export const useAppDispatch =
    useDispatch.withTypes<typeof store.dispatch>();
