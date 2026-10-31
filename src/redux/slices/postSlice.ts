import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../model/IPost.ts";
import {getAll} from "../../services/api.services.ts";


type PostSliceType={
    posts:IPost[]
};

const initPostSliceState:PostSliceType={posts:[]};

//створюю функцію loadPosts для отримання характеристики fulfild
export const loadPosts=createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
       try {
           const posts = await getAll<IPost[]>('/posts')
           return thunkAPI.fulfillWithValue(posts);
       }catch(e){
           console.log(e);
           return thunkAPI.rejectWithValue('some error ');
       }
});

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled,(state, action:PayloadAction<IPost[]>) => {
                state.posts=action.payload;
            })
            .addCase(loadPosts.rejected,(state,action)=>{
                console.log(state);
                console.log(action.payload);
            })
});

export const postSliceActions={
    ...postSlice.actions,loadPosts
};
