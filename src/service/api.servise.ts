import * as axios from "axios";
import type {IUserWithTokens} from "../model/IUserWithTokens.ts";
import type {IProduct} from "../model/IProduct.ts";
import type {IBaseResponseModelType} from "../model/IBaseResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../model/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com/auth",
    headers:{"Content-Type":"application/json"}
});

// дістаємо дані з логінації
export type LoginData={
    username: string,
    password: string,
    expiresInMins: number
};
//аутентифікуємося
export const Login=async({username,password, expiresInMins}:LoginData):Promise<void>=>{
    //дістаємо енпоїд показуємо 2 параметрами куди переходимо і дані які несемо, то б то запит нам повертає user with token
   const {data:userWithToken}=await axiosInstance.post<IUserWithTokens>('/login',{username,password,expiresInMins})
    console.log(userWithToken)
    //записуємо в localStorage 24
    localStorage.setItem("user",JSON.stringify(userWithToken));
   // return userWithToken
};

//метод бере запит конкретну урлу і додає хедер
axiosInstance.interceptors.request.use((requestObject)=>{
    //перехоплює запити GET на токени і перевіряє метод з великої літери
    if (requestObject.method?.toUpperCase()==='GET'){
        // додаємо headers.Authorization і додаємо інформацію з localStorage він повинен бути типізован?створилали метод retriveLocalStorage де вказуєм токен юзера
        requestObject.headers.Authorization ='Bearer '+ retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
});

//дістаємо продукти
export const loadAuthProduct =async ():Promise<IProduct[]>=>{
    //вказуємо два параметри урлу і
    const {data:{products}} = await axiosInstance.get<IBaseResponseModelType>('/products');
    // console.log(products);
    return products
};

//робим рефреш токен для того щоб отримати нові токени коли пропадає скрок трилвалості головного токена
 export const refresh=async():Promise<void>=>{
     // дістали користуваа з LocalStorage
     const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
     // робимо запит на нові токени і відповідь приходить по моделі з новими токенами
     const {data:{accessToken,refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
         refreshToken:iUserWithTokens.refreshToken,
         expiresInMins:1
     });
     console.log(accessToken);
     console.log(refreshToken);
     //звертаємось до користувача в LocalStorage і впровадимо нові токени тобто замінили
     iUserWithTokens.accessToken=accessToken;
     iUserWithTokens.refreshToken=refreshToken;
     // записуємо назад LocalStorage з новими токенами
     localStorage.setItem("user",JSON.stringify(iUserWithTokens));
 };
