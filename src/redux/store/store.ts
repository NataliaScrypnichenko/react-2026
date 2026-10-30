import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.ts";
import {postSlice} from "../slices/postSlice.ts";
import {commentSlice} from "../slices/commentSlice.ts";



//Створюю сховище
export const store = configureStore({
    //створюю кімнати в сховищі
    reducer: {
        userStoreSlice:userSlice.reducer,
        postStoreSlice:postSlice.reducer,
        commentStoreSlice:commentSlice.reducer,
        // complexStoreSlice:complexSlice.reducer,
    }
});
