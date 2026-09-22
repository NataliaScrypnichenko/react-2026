import * as axios from "axios";
import type {IUserWithTokens} from "../model/IUserWithTokens.ts";
import {data} from "react-router";

const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com/auth",
    headers:{"Content-Type":"application/json"}
});
// дістаємо дані з логінації

export type LoginData={
    username: string,
    password: string,
    expiresInMins: number
}

export const Login=async({username,password, expiresInMins}:LoginData)=>{
    //дістаємо енпоїд показуємо 2 параметрами куди переходим і що несемо і дістаємо токени
   const {data:userWithToken}=await axiosInstance.post<IUserWithTokens>('/login',{username,password,expiresInMins})
    console.log(userWithToken)
    //записуемо в localStorage 24




}
