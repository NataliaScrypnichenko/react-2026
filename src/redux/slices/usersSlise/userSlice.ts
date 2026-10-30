//4. формуємо початковий стан для початкового стану initialState і її потрібно типізувати


import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";

type UserSliceType={
    users:IUser[],
};

//5.створю об'єкт який характеризує початтковий стан
const initialState:UserSliceType = {users:[]};
//створюємо loadUsers через createAsyncThunk і тут повернится х-ка fulfilled
 const loadUsers=createAsyncThunk(
    'usersSlice/loadUsers',
    (_,thunkAPI)=>{
      const users= fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())

        return users;
    }
    )


//3. формуємо userSlice і визначаємо три характеристики
export const userSlice = createSlice({
    name: "userSlice",
    initialState:initialState ,// {users:[]}=початковий стан і він типізован і впровадим об'єк який харак.його
    reducers: {},// cтан який впливає на поточний стан в ньому будуть ф-ї
        //  6.функція буде завантажувати об'єкти і відправляти в середину initialState
        // loadUsers:(state,action:PayloadAction<IUser[]>)=>{
        //     //тут не можем використати асинхрону ф-ю то тобі схопити результат асинхронності
        //     // state- об'єкт початковий стан
        //     //action- точка відхоплення корисного навантаження для аргументів,його типізуємо
        //     //payload-це те що передаємо аргумент як масив users
        //     state.users = action.payload;//дістаємо payload вони типізовані під users і записуємо state в комірку users
        //2.3= loadUsers видаляєм воно тут не повино існувати для асинхроних операцій існує спеціальне місцк
    extraReducers:builder =>
        // 2.4= це для асинхроних операцій і тут потрібно визначити або за регіструвати, тут буде аргумен -колбек функція
        // з іменем builder по факту 9.15...функція виконається то інформація попаде в action
        builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
            state.users=action.payload;
        }),
    //це для асинхроних операцій і тут потрібно визначит функції



});

//дорівнює новому об'єкту на основі userSlice
export const userSliceActions={
    ...userSlice.actions,loadUsers
};
