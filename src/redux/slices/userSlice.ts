import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../model/IUser.ts";
import {getAll} from "../../services/api.services.ts";

//типізація
type UserSliceType = {
     users:IUser[],
};
//створюю об'єкт який характеризує початковий стан
const initUserSliceState:UserSliceType={users:[]};

//

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try{
            const users= await getAll<IUser[]>('/users')
            
            return thunkAPI.fulfillWithValue(users);
        }catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error ');
        }
    }
);

//
export const userSlice = createSlice({
    name: "userSlice",//перейменування об'єкта
    initialState: initUserSliceState,// початковий стан
    reducers: {},// зміна станй і дії які відбуваються
    extraReducers: builder =>{
        builder
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
                state.users=action.payload;
            })
            //коли оформили помилку то пишем новий кейс
            .addCase(loadUsers.rejected,(state,action)=>{
                console.log(state);
                console.log(action.payload);
            })//обробка асинхроних операцій
    }

});

//дорівнює новому об'єкту на основі userSlice
export const userSliceActions={
    ...userSlice.actions,loadUsers
}
