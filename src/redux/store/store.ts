import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.ts";
import {postSlice} from "../slices/postSlice.ts";
import {commentSlice} from "../slices/commentSlice.ts";

//Cтворюю головне і спільне сховище store, у якому зберігаються всі частини стану (Slices)
// користувачі, пости та коментарі.
export const store = configureStore({
    reducer: {
        usersStoreSlice:userSlice.reducer,
        postsStoreSlice:postSlice.reducer,
        commentsStoreSlice:commentSlice.reducer,
    }
});
