import * as axios from "axios";
import type {IUseWithTokens} from "../models/IUseWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModel} from "../models/IProductsResponseModel.ts";

const axiosInstance =axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}
});

type LoginData={
    username: string,
    password: string,
    expiresInMins:number
}

export const login=async ({username,password,expiresInMins}:LoginData):Promise<IUseWithTokens>=>{
    // вивили токен
  // const axiosResponse = await axiosInstance.post<IUseWithTokens>('/login',{username,password,expiresInMins})
    const {data:userWithTokens} = await axiosInstance.post<IUseWithTokens>('/login',{username,password,expiresInMins})
    console.log(userWithTokens)//дало токени
        // можна зберігати в локалсторіч,куках,сешинсторич- сесійне сховище діє поки людина там вишла і все пропало
    //локалсторіч, куки з точки клієнта все одно, а з сервис=куки
    localStorage.setItem('user',JSON.stringify(userWithTokens))
    return userWithTokens
}//21/47


//LoadAuthProducts()

export const LoadAuthProducts=async ():Promise<IProduct[]>=>{
    const {data} =await axiosInstance.get<IProductsResponseModel>('/products');
    return data.products

}
