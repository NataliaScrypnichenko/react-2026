import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";


//4.-формуєм початковий стан для стейта initialState:{users:[]}? але його обов`язково потрібно типізувати
type UserSliceType={
    users:IUser[];
};


//об'єкт який характеризує початковий стан і виносим в окрему змінну і тут його типізуєм
const initialState: UserSliceType = {users:[]};

// створюємо loadUsers за допомоги createAsyncThunk()-саме цей об'єкт який поверниться з відси він і має fulfilled
// тобто у нас буде ф-я яка буде createAsyncThunk приймає два аргумента перший-імя до якого слайса належить/ і назва самої функції,другий аргумент це колбек функція і вона також матиме
// два аргумента thunkAPI-перетворювач асинхроних операцій
const loadUsers=createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI)=>{
       try{
           const users=  await fetch('https://jsonplaceholder.typicode.com/users')
               .then((res)=>res.json())

           // return users;//можемо і зіретернути але тут існують
           return thunkAPI.fulfillWithValue(users);//він має в середині механізми які конкретно вказують
           // статусимяк наша дія виконалась fulfillWithValue(users) і тут вказуємо те що повинно виконатися
           // в PayloadAction---тут конктетно вказується  статус виконання нашого промісу=це обхідно для того що статусів можливо бути багато, але це може бути з помилкою то зачить ложим в try
           // throw new Error()//- примусова помилка
           }//Якщо все добре то відправляємо  якщо ні то
       catch(error){
           console.log(error);
           return thunkAPI.rejectWithValue('some error')
       }
    }
    );


// 3.формуємо userSlice через метод createSlice({}) за домомого об'єкта опшин де внього повині визначити
// три характеристики name-стрынгова назва так як і слайс,initialState:{},//тобто початковий стан,
// reducers:{}//метод який впливає на початковий стан
export const userSlice= createSlice({
    name: "userSlice",//ніде не використовується тільки для пошуку кімнати
    initialState:initialState,//тобто початковий стан
    reducers:{},
    //для асинхроних операцій сигмент
    extraReducers:builder => {
        // буде ф-я loadUsers виконувати свій проміс fulfilled і він буде наповнений то інформація яку він отримає
        // попаде в action,ми тут таксамо будемо мати доступ до стейта initialState:initialState і всіх
        // його реалізацій і можемо між собою поєднати
        builder
            .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
            state.users=action.payload;// коли з action дістаємо payload то можем юзерів записати в State
        })
          // коли використовуємо помилку то і тут action= буде наповнене 'some error') і далі їх можна використовувати
        .addCase(loadUsers.rejected,(state, action)=>{
            console.log(action);
            console.log(state);
        })


    }   //для асинхроних операцій саме тут потрібно його визначити або за реєструвати по факту тут буде колбек функція
});


//serSliceActions-буде дорівнювати новому об'єкту який буде зроблений на основі userSlice
export const userSliceActions ={
    ...userSlice.actions,loadUsers
}


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(value => {
//         // dispatch( userSlice.actions.loadUsers(value))- це можна записати по іншому
//         //може давати помилки тому що нічого не типізовано
//         // тобто тут це loadUsers є обгорткую для loadUsers функції з сховища і value це є з сховища-action
//         dispatch(userSliceActions.loadUsers(value));
//     })
//Видалили він не повинен існувати там де був
// {
//         //ф-я яка буде завнтажує об'єкти і відправляє їх всередину
//         // в середині аргумент -тут можна схопити результат відпрацювання асинхронності,тобто тут
//         // буде аргумент який буде схоплювати і впроваджувати в initialState= оновлювати стан
//         //state-силається на initialState:initialState, а action-він буде тримати в собі стрінгову
//         // назву екшену і корисне навантаження тобто точка для відхоплення корисного навантаження для аргументів майбутніх
//         loadUsers:(state,action:PayloadAction<IUser[]>)=>{
//             state.users=action.payload// коли з action дістаємо payload то можем юзерів записати в State
//
//         }
//
//     }//метод який впливає на початковий стан//тут будуть функції які впливають на стан
