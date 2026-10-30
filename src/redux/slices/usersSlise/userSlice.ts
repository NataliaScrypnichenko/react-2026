import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";

//4. формуємо початковий стан для початкового стану initialState і її потрібно типізувати
type UserSliceType={
    users:IUser[],
};

//5.створю об'єкт який характеризує початтковий стан
const initialState:UserSliceType = {users:[]};
//створюємо loadUsers через createAsyncThunk і тут повернится х-ка fulfilled
 const loadUsers=createAsyncThunk(
    'usersSlice/loadUsers',
    async (_,thunkAPI)=>{

      try{
          const users= await fetch('https://jsonplaceholder.typicode.com/users')
              .then(value => value.json());

          return thunkAPI.fulfillWithValue(users);
         // throw new Error();
      }catch(e){

          console.error(e);
          return thunkAPI.rejectWithValue('some error occurred');
      }

      });


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
        builder
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
            state.users=action.payload;
        })
    //коли оформили помилку то пишем новий кейс
            .addCase(loadUsers.rejected,(state,action)=>{
                    console.log(state);
                    console.log(action.payload);
                }
            )
}); //це для асинхроних операцій і тут потрібно визначит функції

//дорівнює новому об'єкту на основі userSlice
export const userSliceActions={
    ...userSlice.actions,loadUsers
};
