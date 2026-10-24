import {useDispatch} from "react-redux";
import {store} from "../store.ts";


//він повинен бути типізований діспач
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

// потрібно зробити свій Live Template (живий шаблон коду). тому що вони найближчим часом будуть однаковими
