// Імпортую функцію configureStore з бібліотеки Redux Toolkit.
// Вона створює головне Redux Store та налаштовує його роботу.
import { configureStore } from "@reduxjs/toolkit";

// Імпортую userSlice, який відповідає за зберігання та обробку даних користувачів.
import { userSlice } from "../slices/userSlice.ts";

// Імпортую postSlice, який відповідає за зберігання та обробку даних постів.
import { postSlice } from "../slices/postSlice.ts";

// Імпортую commentSlice, який відповідає за зберігання та обробку даних коментарів.
import { commentSlice } from "../slices/commentSlice.ts";

// Створюю головне спільне сховище Redux Store.
// У ньому об'єдную три окремі частини стану (Slices): користувачів, пости та коментарі.
//store — назва спільного сховища.
// configureStore() — функція, яка створює сховище та налаштовує Redux.
export const store = configureStore({

    // Властивість reducer визначає, які редюсери будуть керувати станом Store.
    // Тут об'єдную редюсери трьох Slice в одному спільному сховищі.
    reducer: {
        // usersStoreSlice — назва частини стану в загальному Store.
        // userSlice.reducer — редюсер, який керує станом користувачів із userSlice
        usersStoreSlice: userSlice.reducer,

        // postsStoreSlice — назва частини стану в загальному Store.
        // postSlice.reducer — редюсер, який керує станом постів із postSlice
        postsStoreSlice: postSlice.reducer,

        // commentsStoreSlice — назва частини стану в загальному Store.
        // commentSlice.reducer — редюсер, який керує станом коментарів із commentSlice
        commentsStoreSlice: commentSlice.reducer,
    }
});
