import {createAsyncThunk, createSlice, type PayloadAction,} from "@reduxjs/toolkit";
import type {IPost} from "../../model/IPost.ts";
import {getAll} from "../../services/api.services.ts";

//Створюю тип PostSliceType, який описує структуру стану postSlice
type PostSliceType = {
    posts: IPost[];//масив постів.
};

//створюю зміну початковий стан
const initPostSliceState: PostSliceType= {
    posts: [], // Спочатку масив постів порожній
};


//створюю асинхронну ф-ю loadPost за допомогою createAsyncThunk-яка виконує запити до сервера,формує стани pending, fulfilled, rejected та повертає отримані дані або помилку
const loadPost=createAsyncThunk(
    //назва дії,
    'postSlice/loadPost',
    // створюю асинхронну функцію для отримання постів із сервера.
    // Перший параметр _ означає, що додаткові аргументи для запиту не передаються. thunkAPI надає інструменти для //керування результатом асинхронної дії.
    async(_,thunkAPI)=>{
        // try — намагаюся отримати користувачів із сервера.
        try{
            // Викликаю API-сервіс і отримую масив постів
            const posts= await getAll<IPost[]>('/posts');
            // повертаю успішно отримані дані зі статусом fulfilled.
            return thunkAPI.fulfillWithValue(posts);
        }
        catch(e)//перехоплюю помилку, якщо під час виконання запиту виникла проблема.
        {
            // вивожу помилку в консоль
            console.log(e);
            // повертаю власне повідомлення про помилку формує дію зі статусом rejected.
            return thunkAPI.rejectWithValue('some error ');
        }
}
);


//Створюю postSlice, який відповідає за зберігання та зміну користувачів.
export const postSlice = createSlice({
    name: "postSlice",//Назва об'єкта
    initialState: initPostSliceState,//Початковий стан
    reducers: {},// для звичайних синхронних дій
    //  обробляю асинхронні дії loadPost і записує в store
    extraReducers: builder => {
        builder
            // Обробляю кейс, коли запит успішно завершився
            .addCase(loadPost.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts=action.payload;/// Записуємо отримані пости в store
            })
            // Обробляю кейс якщо запит завершився помилкою, виводжу її в консоль.
            .addCase(loadPost.rejected, (state, action) => {
                //виводжу помилку в консоль
              console.log(state);
              console.log(action.payload);
            })
    }
});

//Об'єдную actions зі Slice та асинхронну дію loadPost.
export const postSliceActions={
    ...postSlice.actions,loadPost
};
