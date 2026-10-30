import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userStoreSlise:null,
        postStoreSlice:null,
        commentsStoreSlice:null,
        complexStoreSlice:null,
    }
})
