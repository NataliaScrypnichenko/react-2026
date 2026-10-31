import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../model/IUser.ts";
import {getAll} from "../../services/api.services.ts";

// Створюю тип UserSliceType, який описує структуру стану userSlice
type UserSliceType = {
    users:IUser[],
};

//Створюю початковий стан initUserState.
const initUserState:UserSliceType={users:[]};//масив порожній, оскільки користувачі ще не завантажені з API.


//Створюю асинхронну дію loadUsers за допомогою createAsyncThunk.
export const loadUsers = createAsyncThunk(
    //назва дії,
    'userSlice/loadUsers',

    //асинхронна функція. Перший параметр _ означає, що додаткові аргументи для запиту не передаються. thunkAPI надає інструменти для керування результатом асинхронної дії.
    async (_, thunkAPI) => {
        // try — намагаюся отримати користувачів із сервера.
        try{
            const users= await getAll<IUser[]>('/users');
            // повертаю успішно отримані дані зі статусом fulfilled.
            return thunkAPI.fulfillWithValue(users);
        }
        catch(e)//перехоплюю помилку, якщо під час виконання запиту виникла проблема.
        {
            console.log(e);
            // повертаю власне повідомлення про помилку формує дію зі статусом rejected.
            return thunkAPI.rejectWithValue('some error ');
        }
    }
);


//Створюю userSlice, який відповідає за зберігання та зміну користувачів.
export const userSlice = createSlice({
    name: "userSlice",//назва об'єкта
    initialState: initUserState,// початковий стан
    reducers: {},// зміна стану і дії які відбуваються
    //Обробляю результати асинхронної дії loadUsers і записує в store
    extraReducers: builder =>{
        builder
            // Якщо запит успішний, записую користувачів у Store.
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
                state.users=action.payload;
            })
           // Якщо запит завершився помилкою, виводжу її в консоль.
            .addCase(loadUsers.rejected,(state,action)=>{
                console.log(state);
                console.log(action.payload);
            })
    }

});

// Об'єдную actions зі Slice та асинхронну дію loadUsers.
export const userSliceActions={
    ...userSlice.actions,loadUsers
};
