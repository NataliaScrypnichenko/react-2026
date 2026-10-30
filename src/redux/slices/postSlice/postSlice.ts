import type {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";



// Формуємо початковий стан для початкового стану initialState і її потрібно типізувати
type postSliceType={
    posts: IPost[]
}

//створю об'єкт який характеризує початковий стан
const initialStatePost:postSliceType = {posts: []};

const loadPosts=createAsyncThunk(
        'postSlice/loadPosts',
        async (_,thunkAPI)=>{
           try{
               const posts=await fetch('https://jsonplaceholder.typicode.com/posts',)
                   .then(value => value.json());

               return thunkAPI.fulfillWithValue(posts);
           }catch (e) {
               console.error(e);
               return thunkAPI.rejectWithValue('some error');
           }

        });


//формую кімнату
export const postSlice=createSlice({
    name: "postsSlice",
    initialState:initialStatePost,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(loadPosts.fulfilled,(state, action:PayloadAction<IPost[]>) => {
                state.posts=action.payload
            })
           .addCase(loadPosts.rejected,(state,action)=>{
                  console.log(state);
                    console.log(action.payload);
           })

});

//дорівнює новому об'єкту на основі postSlice
export const postSliceAction={
    ...postSlice.actions,loadPosts
}
