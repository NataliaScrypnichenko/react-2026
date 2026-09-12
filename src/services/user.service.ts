import * as axios from "axios";
import type {IUser} from "../model/IUser.ts";


//create=приймає аргумент один це об'єкт з опціями,в якому є один обовязквий сигмент baseURL=базова урла на яку роблять всі запити, можна створювати axiosInstance багато різних з різними урлами.Другий сигмент headers =загалом існують загальни хедири які відправляються підчас нашого запиту. headers:{"Content-Type":"application/json"}= для того щоб не додавати до кожного то можна це зробити в базовому об'єкті. Тобто зараз що будем робити то воно буде містити інформацію цю// ще можна додавати сюди додаткові хедири.
const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{"Content-Type":"application/json"}
});

//запит на всіх користувачів то для перевірки
// axiosInstance.get<IUser[]>('/users')

export const getAllUsers = async ():Promise<IUser[]> => {
    //саме в {data} лежить інформація яка потрібна нам і буде містити такі параметри як в <IUser[]>
    const {data}= await axiosInstance.get<IUser[]>("/users");
    return data;// далі використовується так само як і раніше useState
   // const response= await axiosInstance.get<IUser[]>("/users");
   // console.log(response)
}

//цікава штука в axios чого не має по замовчуванні fetch це інтерсептори=interceptors=це перехопники = це чувачки які перехоплюють верхньому прикладі ми робимо реквест=request і нам приходить респонс=response сервісів може бути багато і хочемо кожний із них перехоплювати і  роздивлятися інформацію чи логувати її можливо щось додавати.Щоб так не робити до кожного то є прошарок який може вклинитися і робити це.

//по факту це і є наш запит= урла,які дані пердаємо,хедери,статуси,завнтаження...
axiosInstance.interceptors.request.use((request)=>{
     console.log(request);
     //будем дьодавати свій хендер
    request.headers.set("XXX", "XXXX");//тут можуть лежати ключі доступу це на 6 заняті
    console.log(request.method);//дозволяє відрізняти який був запит
    return  request
});

// axiosInstance.interceptors.response.use((response)=>{
//     console.log(response);
//     return response;
// })
//щоб додати до всіх методів то interceptors підняти на вер над getAllUsers і тоді воно все атоматично буде спрацьовувати якщо викликаємо axiosInstance якщо це стосується цього об'єкта==ось чому потрібні interceptors


// можем зберігати дані POST
// fetch('', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         key1: 'value1',
//         key2: 'value2',
//     }),
// });
export const saveUser=async (user:IUser):Promise<IUser> => {
   const {data}=await axiosInstance.post<IUser>("/users",user)

    return data

 }
