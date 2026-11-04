// Імпортую createAsyncThunk для створення асинхронних дій,
// createSlice для створення Redux Slice,
// PayloadAction для типізації даних, які передаються в action.payload.
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Імпортую інтерфейс IComment, який описує структуру одного коментаря.
import type { IComment } from "../../model/IComment.ts";

// Імпортую функцію getAll, яка виконує GET-запити до сервера.
import { getAll } from "../../services/api.services.ts";

// Створюю тип CommentStateType, який описує структуру стану commentSlice.
type CommentStateType = {
    comments: IComment[]; // Масив коментарів, кожен елемент якого відповідає інтерфейсу IComment.
};

// Створюю початковий стан initCommentState для commentSlice.
const initCommentState: CommentStateType = {
    comments: [] // Спочатку масив коментарів порожній, оскільки дані ще не завантажені.
};

// Створюю асинхронну дію loadComment за допомогою createAsyncThunk.Вона виконує запит до сервера для отримання списку коментарів. createAsyncThunk автоматично створює три стани виконання: pending — запит виконується,
// fulfilled — запит успішно завершився, rejected — під час запиту виникла помилка.
export const loadComment = createAsyncThunk(
    // Назва асинхронної дії.
    'commentSlice/loadComment',
    // Асинхронна функція, яка виконує запит до сервера.Перший параметр _ означає, що додаткові аргументи для запиту не передаються.thunkAPI надає інструменти для керування результатом асинхронної дії.
    async (_, thunkAPI) => {
        // try — блок, у якому намагаюся отримати коментарі із сервера.
        try {
            // Викликаю функцію getAll та отримую масив коментарів.IComment[] вказує TypeScript, що результатом має бути масив коментарів.
            const comments = await getAll<IComment[]>('/comments');
            // Повертаю отримані дані зі статусом fulfilled.Масив коментарів буде доступний через action.payload.
            return thunkAPI.fulfillWithValue(comments);
        }
        catch (e) // catch перехоплює помилку, якщо під час виконання запиту виникла проблема.
       {
            // Виводжу інформацію про помилку в консоль.
            console.log(e);
            // Повертаю власне повідомлення про помилку.Це створює результат зі статусом rejected.
            return thunkAPI.rejectWithValue('some error ');
        }
    }
);


// Створюю commentSlice, який відповідає за зберігання та зміну стану коментарів.
export const commentSlice = createSlice({
    name: "commentSlice/loadComment",// Назва Slice.
    initialState: initCommentState,// Встановлюю початковий стан Slice.
    reducers: {}, // reducers призначений для звичайних синхронних дій.У цьому Slice таких дій поки немає, тому залишаю порожній об'єкт.
    // extraReducers використовую для обробки асинхронних дій,створених за допомогою createAsyncThunk.
    extraReducers: builder => {
        builder
            // Обробляю успішне завершення запиту loadComment.
            .addCase(loadComment.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                // Записую отриманий масив коментарів у стан Redux Store/action.payload містить дані, які повернула асинхронна дія.
                state.comments = action.payload;
            })
            // Обробляю ситуацію, коли запит loadComment завершився помилкою.
            .addCase(loadComment.rejected, (state, action) => {
                // Виводжу поточний стан Slice у консоль.
                console.log(state);
                // Виводжу повідомлення про помилку, яке повернув rejectWithValue.
                console.log(action.payload);
            });
    }
});


// Створюю об'єкт commentSliceActions, у якому об'єдную:
// звичайні actions, створені через Slice,
// та асинхронну дію loadComment.
export const commentSliceActions = {
    ...commentSlice.actions,
    loadComment
};
