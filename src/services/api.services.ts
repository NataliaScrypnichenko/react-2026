//Створюю змінну baseUrl, у якій зберігаю базову адресу сервера API.
const baseUrl='https://jsonplaceholder.typicode.com';

//створюю універсальну асинхронну функцію getAll
// та використовує Generic типізацію <T>.
//endpoint: string —  передаю адресу потрібного ресурсу у вигляді рядка.
// За допомогою fetch виконую запит до сервера,
// .json() перетворює отриману відповідь у JavaScript-дані,
// а return повертає результат із зазначеним типом.
export const getAll=async <T>(endpoint:string) => {
   const responseResult =await fetch(`${baseUrl}${endpoint}`)
       .then((response:Response)=>response.json())
    return responseResult as T;
};
