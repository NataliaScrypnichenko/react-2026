import * as axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IBaseResponseModelType} from "../models/IBaseResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";



// Створюємо окремий axios instance.
//
// Навіщо він потрібен?
// Щоб один раз налаштувати спільні параметри для наших запитів,
// замість того щоб повторювати їх у кожному axios-запиті.
//
// baseURL — базова частина URL API.
// Тому нижче ми можемо писати просто '/login', '/products', '/refresh',
// а axios автоматично додасть:
// https://dummyjson.com/auth
//
// headers задає формат даних, які ми відправляємо на сервер.
const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com/auth",
    headers:{"Content-Type":"application/json"}
});


// Типізуємо дані, які необхідні для авторизації.
//
// username — ім'я користувача.
// password — пароль.
// expiresInMins — час життя токена в хвилинах.
export type LoginData={
    username: string,
    password: string,
    expiresInMins: number
};


// Функція Login виконує авторизацію користувача.
//
// async означає, що всередині функції виконується асинхронний запит.
// Promise<void> означає, що функція нічого не повертає,
// але повертає Promise після завершення запиту.
export const Login=async({username,password, expiresInMins}:LoginData):Promise<void>=>{

    // Робимо POST-запит на endpoint '/login'.
    //
    // Оскільки axiosInstance вже має baseURL,
    // фактичний URL буде:
    // https://dummyjson.com/auth/login
    //
    // У другому параметрі передаємо дані користувача.
    //
    // {data:userWithToken} — дістаємо data з відповіді axios
    // і одразу перейменовуємо її на userWithToken.
    //
    // <IUserWithTokens> типізуємо відповідь сервера
    // відповідно до нашої моделі користувача з токенами.
    const {data:userWithToken}=await axiosInstance.post<IUserWithTokens>(
        '/login',
        {username,password,expiresInMins}
    )

    // Перевіряємо отриману відповідь у консолі.
    console.log(userWithToken)

    // Зберігаємо інформацію про користувача і токени
    // у localStorage.
    //
    // localStorage може зберігати тільки рядки,
    // тому об'єкт перетворюємо в JSON-рядок через JSON.stringify().
    localStorage.setItem("user",JSON.stringify(userWithToken));

    // return userWithToken
};


// Створюємо request interceptor.
//
// Interceptor перехоплює запит перед його відправленням на сервер.
//
// Тут він потрібен для автоматичного додавання accessToken
// до GET-запитів, яким потрібна авторизація.
axiosInstance.interceptors.request.use((requestObject)=>{

    // Перевіряємо HTTP-метод запиту.
    //
    // toUpperCase() потрібен для того,
// щоб порівняння було незалежним від регістру:
    // "get" перетвориться на "GET".
    //
    // Важливо: у цьому завданні токен автоматично додається
    // саме до GET-запитів, тому що саме GET /products
    // потребує accessToken.
    //
    // POST /login не може використовувати цей токен,
    // оскільки під час login ми ще тільки отримуємо токени.
    //
    // POST /refresh використовує refreshToken у body
    // і також не потребує автоматичного accessToken
    // через цей interceptor.
    if (requestObject.method?.toUpperCase()==='GET'){

        // Додаємо Authorization до headers запиту.
        //
        // retriveLocalStorage<IUserWithTokens>('user')
        // дістає користувача з localStorage
        // і повідомляє TypeScript, що цей об'єкт має тип IUserWithTokens.
        //
        // З його accessToken створюємо стандартний формат:
        // Bearer TOKEN
        requestObject.headers.Authorization ='Bearer '+ retriveLocalStorage<IUserWithTokens>('user').accessToken
    }

    // Обов'язково повертаємо requestObject.
    //
    // Після цього axios продовжить виконання запиту
    // вже з доданим Authorization.
    return requestObject;
});


// Функція отримує авторизовані продукти.
export const loadAuthProduct =async ():Promise<IProduct[]>=>{

    // Виконуємо GET-запит на '/products'.
    //
    // Через baseURL фактичний URL буде:
    // https://dummyjson.com/auth/products
    //
    // GET автоматично проходить через interceptor,
    // тому до нього буде доданий accessToken.
    //
    // <IBaseResponseModelType> описує повну відповідь сервера.
    //
    // Подвійна деструктуризація:
    //
    // response має приблизно таку структуру:
    // {
    //     data: {
    //         products: [...],
    //         total: ...,
    //         skip: ...,
    //         limit: ...
    //     }
    // }
    //
    // Перша {data} дістає data з відповіді axios.
    // Друга {products} дістає products вже з data.
    //
    // Тому змінна products одразу містить масив продуктів.
    const {data:{products}} = await axiosInstance.get<IBaseResponseModelType>('/products');

    // console.log(products);

    // Повертаємо тільки масив продуктів,
    // тому функція має Promise<IProduct[]>.
    return products
};


// Робимо refresh токена.
//
// Ця функція потрібна тоді,
// коли accessToken більше не працює або закінчився його термін дії.
export const refresh=async():Promise<void>=>{

    // Дістаємо користувача з localStorage.
    //
    // Тут нам потрібен refreshToken,
    // за допомогою якого сервер видасть нові токени.
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    // Відправляємо POST-запит на '/refresh'.
    //
    // Передаємо refreshToken, який був отриманий під час login.
    //
    // expiresInMins:1 означає, що новий accessToken
    // буде діяти 1 хвилину.
    //
    // <ITokenPair> описує відповідь,
    // яка містить accessToken і refreshToken.
    //
    // {data:{accessToken,refreshToken}} —
    // дістаємо data, а з нього одразу два токени.
    const {data:{accessToken,refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken:iUserWithTokens.refreshToken,
        expiresInMins:1
    });

    // Перевіряємо нові токени в консолі.
    console.log(accessToken);
    console.log(refreshToken);

    // Замінюємо старий accessToken на новий.
    iUserWithTokens.accessToken=accessToken;

    // Замінюємо старий refreshToken на новий.
    iUserWithTokens.refreshToken=refreshToken;

    // Записуємо оновленого користувача назад у localStorage.
    //
    // Оскільки localStorage приймає рядок,
    // об'єкт знову перетворюємо через JSON.stringify().
    localStorage.setItem("user",JSON.stringify(iUserWithTokens));
};
