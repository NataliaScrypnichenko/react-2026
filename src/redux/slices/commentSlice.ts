import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../model/IComment.ts";
import {getAll} from "../../services/api.services.ts";

// Створюю тип CommentStateType, який описує структуру стану commentSlice
type CommentStateType={
    comments: IComment[]
};

//Створюю початковий стан initCommentState
const initCommentState:CommentStateType={comments:[]};

// /Створюю асинхронну діюloadComment за допомогою createAsyncThunk.-яка виконує запити до сервера,
// формує стани pending, fulfilled, rejected та повертає отримані дані або помилку
export const loadComment = createAsyncThunk(
    'commentSlice/loadComment', //назва дії
    //створюю асинхронну функцію. Перший параметр _ означає, що додаткові аргументи для запиту не передаються.
    // thunkAPI надає інструменти для керування результатом асинхронної дії.
    async (_, thunkAPI)=>{
        // try — намагаюся отримати коментарі із сервера.
        try{
            // Викликаю API-сервіс і отримую масив comments
            const comments = await getAll<IComment[]>('/comments');
            // повертаю успішно отримані дані зі статусом fulfilled.
            return thunkAPI.fulfillWithValue(comments);
        }
        catch(e)//перехоплюю помилку, якщо під час виконання запиту виникла проблема.
        {
            console.log(e);//вивожу помилку в консоль
            //// повертаю власне повідомлення про помилку формує дію зі статусом rejected.
            return thunkAPI.rejectWithValue('some error ');
        }
    }
);

//Створюю commentSlice, який відповідає за зберігання та зміну коментарів.
export const commentSlice = createSlice({
    name: "commentSlice",//назва об'єкта
    initialState: initCommentState,// початковий стан
    reducers: {},//  для звичайних синхронних дій
    //Обробляю результати асинхронної дії loadComment і записує в store
    extraReducers: builder => {
        builder
            // Обробляю кейс, коли запит успішно завершився у Store.
            .addCase(loadComment.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                state.comments=action.payload;/// Записую отримані коментарі в store
            })
            // Якщо запит завершився помилкою, виводжу її в консоль.
            .addCase(loadComment.rejected, (state, action) => {
                console.log(state);
                console.log(action.payload);
            })
    }
});

// Об'єдную actions зі Slice та асинхронну дію loadComment
export const commentSliceActions={
    ...commentSlice.actions,loadComment
};
