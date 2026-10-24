import {useSelector} from "react-redux";
import {store} from "../store.ts";

//створюю власний хук для типізації- він з store візьме стан і з кожного сигмента який характеризує певний слайс
// витягне які типи данних лежать в серединні під капотом слайсів
// хуки повинні називатися з use і якщо це наш кастумний то ми додаємо йому сигмент App або той який домовимося в команді

export const useAppSelector=
    useSelector.withTypes<ReturnType<typeof store.getState>>();
