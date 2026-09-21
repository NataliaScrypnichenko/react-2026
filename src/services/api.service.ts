import * as axios from "axios";
import type {IUseWithTokens} from "../models/IUseWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData={
    username: string,
    password: string,
    expiresInMins:number
};
const axiosInstance =axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}
});

//для того щоб заходити на урлу авторизованим і не водити постояно токени.Тут ми кажем що будем перехоплювати всі запити гітові
//
// const retriveLocalStorage= <T>(key:string)=>{
//     //сюди приходить об'єк або нічого або стрінгового типу
//     const object = localStorage.getItem(key) || '';
//     // перевырка якщо не ыснуэ обёэкта то опвертаэм пустий об`экт
//     if(!object){
//            return {} as T;
//     }
//     // а буде то
//     const parse= JSON.parse(object);
//     //повертаємо строго типизований
//     return parse as T;
// }
// axiosInstance.interceptors.request.use((requestObject)=>{
//     // у випадку якщо то
//     if (requestObject.method?.toUpperCase()=== 'GET'){
//         //потрібно додати хедер з назвою Authorization
//         // дає помилку = витягнули юзеера з локалсторіч а потім парсуємоJSON.parse(localStorage.getItem("user")) то JSON.parse не типізує нічого і об'єкт виглядає ені ,щоб це вірішити робим додатковий метод retriveLocalStorage і вказуємо що підтягуємо <IUseWithTokens>
//         requestObject.headers.Authorization = `Bearer `+ retriveLocalStorage<IUseWithTokens>('user');
//         // в майбутньому якщо потрібно ще щось дістати з локалсторічто знову викликаємо retriveLocalStorage<IProductsResponseModelType> ('products') тобто ця функція при юзеру.// єдине що це retriveLocalStorage вкладають в окремий файл helpers.ts
//     }
// return requestObject;
//  });

axiosInstance.interceptors.request.use((requestObject)=>{
    if (requestObject.method?.toUpperCase()=== 'GET'){
        requestObject.headers.Authorization = `Bearer `+ retriveLocalStorage<IUseWithTokens>('user').accessToken;
    }
    return requestObject;
});
// тоб то коли переходим з логінації на с торінку і дає помилку 401 то потрібно зайти провірити код =>Network=>product=>authorization

//.interceptors не буде діяти на login бо він POST запит, а на LoadAuthProducts бо він GET

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
    // також можна дестрокторизувати з відси {data:{products}}=> return products/// const {data}= return data.products
    const {data:{products}} =await axiosInstance.get<IProductsResponseModelType>('/products');
    return products

}

//коли помер головний токен то робимо рефреш токен

export const refresh =async ()=>{
    //дістаємо з localStorage
    // const refreshToken = retriveLocalStorage<IUseWithTokens>('user').refreshToken;
    // відповідь приходитиме новий  з токенами ITokenPair
    //характеризує користувача

    // дістали користувача з localStorage
    const iUseWithTokens = retriveLocalStorage<IUseWithTokens>('user');

    // отримали нові для нього accessToken,refreshToken
    const {data:{accessToken,refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
            refreshToken:iUseWithTokens.refreshToken,
            expiresInMins:1
    });
    console.log(accessToken)
    console.log(refreshToken)
        //// візмемо цього користувача який існує в локалсторіч звернимось до accessToken і в провадимо нову accessToken
    // потім замінили йому на нові accessToken,refreshToken
    iUseWithTokens.accessToken = accessToken;
    iUseWithTokens.refreshToken = refreshToken;
    //потім назад записали в localStorage
    localStorage.setItem('user', JSON.stringify(iUseWithTokens))
};

// після того як це зробили повертамося на сторінку де діставали продукти
