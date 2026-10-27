import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "./models/IUser.ts";

// type postSliceType={
//     posts: IPost[]
// }
//
// const initialStatePost:postSliceType = {posts: []};
//
// const postSlice=createSlice({
//     name: "postsSlice",
//     initialState:initialStatePost,
//     reducers:{
//         loadPosts: (state, action:PayloadAction<IPost[]>) => {
//             state.posts = action.payload
//         }
//     }
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//4. формуємо початковий стан для початкового стану initialState і її потрібно типізувати
type UserSliceType={
    users:IUser[],
};

//5.створю об'єкт який характеризує початтковий стан
 const initialState:UserSliceType = {users:[]};

//3. формуємо userSlice і визначаємо три характеристики
export const userSlice = createSlice({
    name: "userSlice",
    initialState:initialState ,// {users:[]}=початковий стан і він типізован і впровадим об'єк який харак.його
    reducers: {
    //  6.функція буде завантажувати об'єкти і відправляти в середину initialState
        loadUsers:(state,action:PayloadAction<IUser[]>)=>{
            //тут не можем використати асинхрону ф-ю то тобі схопити результат асинхронності
            // state- об'єкт початковий стан
            //action- точка відхоплення корисного навантаження для аргументів,його типізуємо
            //payload-це те що передаємо аргумент як масив users
           state.users = action.payload;//дістаємо payload вони типізовані під users і записуємо state в комірку users

        }

    }// cтан який впливає на поточний стан в ньому будуть ф-ї
});

//2. пропса в {store} це є сховище приймає опції і створює сховище
const store=configureStore({
    reducer:{
        userSlice:userSlice.reducer,//кімнати для компонента З функцією його reducer
        // postSlice:postSlice.reducer//
    }
});
//тож створюємо хук яий сам буде діставати типізацію з usersSlice сховища
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

//дорівнює новому об'єкту на основі userSlice
export const userSliceActions={
    ...userSlice.actions,
};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//1 створюємо сховище на всіх рівнях
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
                     <RouterProvider router={router}/>
            </Provider>
);
