import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.ts";
import {postSlice} from "../slices/postSlice.ts";


export const store = configureStore({
    reducer: {
        usersStoreSlice:userSlice.reducer,
        postsStoreSlice:postSlice.reducer,
        // commentsStoreSlice:commentSlice.reducer,
    }
});
