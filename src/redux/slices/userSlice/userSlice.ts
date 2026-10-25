import {createAsyncThunk, createSlice, isFulfilled,  isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";


//4.-формуєм початковий стан для стейта initialState:{users:[]}? але його обов`язково потрібно типізувати
type UserSliceType={
    users:IUser[];
    user:IUser | null;
    loadState:boolean;//характеризує стан завантаження отримання данних з АРІ,якщо дані отримані змінюється на тру
};

//об'єкт який характеризує початковий стан і виносим в окрему змінну і тут його типізуєм

const initialState: UserSliceType = {users:[],user:null,loadState:false};

// створюємо loadUsers за допомоги createAsyncThunk()
 const loadUsers=createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI)=>{
        //викликаємо changeLoadState це дозволить змінити в initialState комірку в loadState:boolean
        // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

       try{
           const users=  await fetch('https://jsonplaceholder.typicode.com/users')
               .then((res)=>res.json())

           // return users;//можемо і зіретернути але тут існують
           return thunkAPI.fulfillWithValue(users);// в PayloadAction---тут конктетно вказується  статус виконання нашого промісу=це обхідно для того що статусів можливо бути багато, але це може бути з помилкою то зачить ложим в try
           // throw new Error()//- примусова помилка
           }//Якщо все добре то відправляємо якщо ні то
       catch(error){
           console.log(error);
           return thunkAPI.rejectWithValue('some error')
       }
    }
    );

//для того щоб перейти на поселання юзера с id робим таку же функцію якого дістаємо з АРІ
 const loadUser=createAsyncThunk(
    'userSlice/loadUser',// назва слайса і функції по чому шукати її
    async (id:string,thunkAPI)=>{
        //викликаємо changeLoadState це дозволить змінити в initialState комірку в loadState:boolean
        // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

        try{
            const user=  await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                .then((res)=>res.json())
            return thunkAPI.fulfillWithValue(user);
            // throw new Error()//- примусова помилка
        }//Якщо все добре то відправляємо якщо ні то помилка
        catch(error){
            console.log(error);
            return thunkAPI.rejectWithValue('some error')
        }
    }
);


// 3.формуємо userSlice через метод createSlice({}) з
export const userSlice= createSlice({
    name: "userSlice",//ніде не використовується тільки для пошуку кімнати
    initialState:initialState,//тобто початковий стан
    // Навіщо reducers= характеристики які змінюються просто так а не синхронно просто примітивні типи то їх прописуємо в reducers(loadState:false) а це точка регістрації де зразу вказується яка функція виконується
    // ці функції можна винести в окремі файли на дЗ обовязково
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
            state.loadState=action.payload;
        }//тепер можемо викликати де завгодно влюбому компоненті
    },
    //для асинхроних операцій сигмент
    //це точка регістрацій
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

            //як написали функцію про юзера айді то додаємо кейсна на user,якщо буде виконано вдало то
            .addCase(loadUser.fulfilled,(state, action:PayloadAction<IUser>)=>{
                state.user=action.payload
            })//після того як вписали то ідем на UserPage

        // якщо є однакові виклики в двох функціях то їх можна скопонувати за допомогою кейса,щоб не викликати одне і теж два рази
            //isFulfilled- функція приймає як аргумент інші асинхроні функції за якими вона буде слідкувати чи виконалися вони наповнено і якщо так то виконує колбек функцію
            .addMatcher(isFulfilled(loadUsers,loadUser),
                (state )=>{
                //доступатися до і заміняти на тру
                    state.loadState=true;
            })
        // робимо щось що впливає на погану дію
            .addMatcher(isRejected(loadUsers,loadUser),(state)=>{
                console.log(state);//Щосаме буде робити функція визначаєм самі
            })

//кейси addCase діють на певний метод і на певний стан його виконання, а addMatcher діє на методи які зазначили через наглядача isFulfilled
    }   //для асинхроних операцій саме тут потрібно його визначити або за реєструвати по факту тут буде колбек функція
});


//serSliceActions-буде дорівнювати новому об'єкту який буде зроблений на основі userSlice
export const userSliceActions ={
    ...userSlice.actions,loadUsers,loadUser
}


