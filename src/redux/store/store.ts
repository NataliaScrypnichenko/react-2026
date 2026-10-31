import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.ts";


export const store = configureStore({
    reducer: {
        usersStoreSlice:userSlice.reducer,
        // postsStoreSlice:postSlise.reducer,
        // commentsStoreSlice:commentSlice.reducer,
    }
});
