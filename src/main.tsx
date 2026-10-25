import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "./models/IUser.ts";

//4.-формуєм початковий стан для стейта initialState:{users:[]}? але його обов`язково потрібно типізувати
type UserSliceType={
    users:IUser[];
};
//об'єкт який характеризує початковий стан і виносим в окрему змінну і тут його типізуєм
const initialState: UserSliceType = {users:[]};

// 3.формуємо userSlice через метод createSlice({}) за домомого об'єкта опшин де внього повині визначити
// три характеристики name-стрынгова назва так як і слайс,initialState:{},//тобто початковий стан,
// reducers:{}//метод який впливає на початковий стан
export const userSlice= createSlice({
    name: "userSlice",//ніде не використовується тіль для пошуку кімнати
    initialState:initialState,//тобто початковий стан
    reducers:{
        //ф-я яка буде завнтажує об'єкти і відправляє їх всередину
        // в середині аргумент -тут можна схопити результат відпрацювання асинхронності,тобто тут
        // буде аргумент який буде схоплювати і впроваджувати в initialState= оновлювати стан
        //state-силається на initialState:initialState, а action-він буде тримати в собі стрінгову
        // назву екшену і корисне навантаження тобто точка для відхоплення корисного навантаження для аргументів майбутніх
        loadUsers:(state,action:PayloadAction<IUser[]>)=>{
            state.users=action.payload// коли з action дістаємо payload то можем юзерів записати в State

          }

    }//метод який впливає на початковий стан//тут будуть функції які впливають на стан
});

//2. Створюєм сховище за допомоги спеціальної функції configureStore() в середину передаємо опції
// з чого воно буде складатися
export const  store= configureStore({
    //існує параметер в якому будуть частинки сховища тобто у нас є сторінки і їх потрібно розділити кімнати
    // для певних стрінок сутностей і всієї роботи з ними назва їх в редакті тукета слайси/Тобто є функція яка
    // приймає опції за допомоги цих опоцій породжується сховище
    reducer:{
        userSlice:userSlice.reducer,// потрібно сформувати слайс,і тут пишем його функцію
        // postSlice:null

    }
});



//створюю власний хук для типізації- він з store візьме стан і з кожного сигмента який характеризує певний слайс
// витягне які типи данних лежать в серединні під капотом слайсів
// хуки повинні називатися з use і якщо це наш кастумний то ми додаємо йому сигмент App або той який домовимося в команді
export const useAppSelector= useSelector.withTypes<ReturnType<typeof store.getState>>();

//serSliceActions-буде дорівнювати новому об'єкту який буде зроблений на основі userSlice
export const userSliceActions ={
     ...userSlice.actions,
}


// в головному файлі визначаю контекст на яких рівнях буде працювати наше сховище / тобто які компоненти зможуть
// його бачити, зараз це найвища точка.Для цього потрібні відповідні програми під ключити
// 1.будь-яка сторінка layout яка буде рендиритися в первинному аутлеті, вони всі спроможні будуть між собою ділити сховище
// Provider store={}-тут є пропса store={} вона поста і це є звісно посилання на наше сховище
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
                     <RouterProvider router={router}/>
            </Provider>
);
