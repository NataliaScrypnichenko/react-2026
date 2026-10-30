import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/usersSlise/usersSlice.ts";


//2. пропса в {store} це є сховище приймає опції і створює сховище
export const store=configureStore({
    reducer:{
        userSlice:userSlice.reducer,//кімнати для компонента З функцією його reducer
        // postSlice:postSlice.reducer//
    }
});
