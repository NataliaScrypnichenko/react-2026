// Імпортую createAsyncThunk для створення асинхронних дій,
// createSlice для створення Redux Slice,
// PayloadAction для типізації даних, які передаються в action.payload.
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Імпортую інтерфейс IPost, який описує структуру одного поста.
import type { IPost } from "../../model/IPost.ts";

// Імпортую функцію getAll, яка виконує GET-запити до сервера.
import { getAll } from "../../services/api.services.ts";


//Створюю тип PostSliceType, який описує структуру стану postSlice
type PostSliceType = {
    posts: IPost[];// Масив постів, кожен елемент якого відповідає інтерфейсу IPost
};

//Створюю початковий стан для postSlice.
const initPostSliceState: PostSliceType= {
    posts: [], // Спочатку масив постів порожній, оскільки дані ще не завантажені.
};


//створюю асинхронну ф-ю loadPost за допомогою createAsyncThunk-яка виконує запити до сервера,формує стани pending— запит виконується, fulfilled-запит успішно завершився, rejected -під час запиту виникла помилка.
// та повертає отримані дані або помилку
const loadPost=createAsyncThunk(
    //назва дії,
    'postSlice/loadPost',
    // створюю асинхронну функцію для отримання постів із сервера.
    // Перший параметр _ означає, що додаткові аргументи для запиту не передаються. thunkAPI надає інструменти для //керування результатом асинхронної дії.
    async(_,thunkAPI)=>{
        // try — блок, у якому намагаюся виконати запит до сервера.
        try{
            // Викликаю функцію getAll та отримую масив постів.
            // IPost[] вказує TypeScript, що результатом має бути масив постів.
            const posts= await getAll<IPost[]>('/posts');
            // повертаю успішно отримані дані зі статусом fulfilled. Отриманий масив буде доступний через action.payload.
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


//Створюю postSlice, який відповідає за зберігання та зміну постів.
export const postSlice = createSlice({
    name: "postSlice",//Назва об'єкта
    initialState: initPostSliceState,//Початковий стан
    reducers: {},// для звичайних синхронних дій У цьому Slice таких дій поки немає, тому залишаю порожній об'єкт.
    //  обробляю асинхронні дії loadPost і записує в store
    extraReducers: builder => {
        builder
            // Обробляю кейс, коли запит успішно завершився
            .addCase(loadPost.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts=action.payload;/// Записуємо отримані пости в store/action.payload містить дані, які повернула асинхронна дія.
            })
            // Обробляю ситуацію, коли запит loadPost завершився помилкою.
            .addCase(loadPost.rejected, (state, action) => {
                //виводжу помилку в консоль
              console.log(state);
              console.log(action.payload);
            })
    }
});

// Створюю об'єкт postSliceActions, у якому об'єдную: звичайні actions, створені через Slice,
// та асинхронну дію loadPost.
export const postSliceActions={
    ...postSlice.actions,loadPost
};
