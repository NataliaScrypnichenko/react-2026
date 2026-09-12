Axios робить те саме, але часто код виходить простішим і зручнішим.Він відає об'єкти іншого типу, fetch=відає масив із юзерами то Axios цей масив обгортає ще в один об'єкт в якого є купа мето інформації яка в майбутньому може знадобитися
"axios":"^1.20.0"




Axios у React — це бібліотека для роботи з HTTP-запитами. Простими словами: вона допомагає React-програмі отримувати дані з сервера та відправляти дані на сервер.

Ти вже працювала з fetch, наприклад відає масив із юзерами 
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => console.log(data));

Axios робить те саме, але часто код виходить простішим і зручнішим.Він відає об'єкти іншого типу, fetch=відає масив із юзерами то Axios цей масив обгортає ще в один об'єкт в якого є купа мето інформації яка в майбутньому може знадобитися

1. Для чого використовують Axios?

Наприклад, у тебе є API:
https://dummyjson.com/users
І ти хочеш:

отримати список користувачів;
отримати одного користувача;
створити нового;
змінити користувача;
видалити користувача.

Для цього використовують HTTP-методи:

Метод	Для чого
GET	    отримати дані
POST	створити / відправити дані
PUT	    повністю змінити дані
PATCH	частково змінити дані
DELETE	видалити дані

Axios дозволяє легко виконувати всі ці запити.

3. GET — отримати дані
Це найчастіший запит, з яким ти зараз працюєш.

Через fetch:
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => console.log(data));

Через Axios:
axios.get('https://dummyjson.com/users')
.then(response => {
console.log(response.data);
});

Тут важливо запам'ятати:
response.data
Axios сам перетворює JSON-відповідь у JavaScript-об'єкт.

Тобто з fetch ти робила:
res.json()

А з Axios:
response.data

4. Axios + async/await

У React ти дуже часто будеш бачити саме такий варіант:

const getUsers = async () => {
const response = await axios.get('https://dummyjson.com/users');
    console.log(response.data); };

Або у useEffect:

useEffect(() => {
    const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
    };

    getUsers();
}, []);

Це дуже схоже на те, що ти вже робила з fetch.

5. Що таке response?

Наприклад:

const response = await axios.get('https://dummyjson.com/users');

response містить не тільки самі користувацькі дані.
У ньому є приблизно:
{
data: {...},
status: 200,
statusText: "OK",
headers: {...},
...
}
А самі дані знаходяться тут:
response.data
Наприклад:
console.log(response.data.users);

6. POST — створити дані
Наприклад, хочемо створити користувача.

const response = await axios.post(
    'https://dummyjson.com/users/add',
    {
      firstName: 'Natalia',
      age: 30
    }
);
console.log(response.data);
Тут:
axios.post(URL, DATA)
Перший параметр:
'https://dummyjson.com/users/add'— куди відправляємо.
Другий:{
firstName: 'Natalia',
age: 30
} — що відправляємо.

7. PUT — повністю змінити
   const response = await axios.put(
   'https://dummyjson.com/users/1',
   {
   firstName: 'Anna',
   age: 25
   }
   );

PUT зазвичай означає:аміни об'єкт новими даними.

8. PATCH — частково змінити
Наприклад, у користувача є:
{
id: 1,
firstName: 'John',
age: 30,
email: 'john@gmail.com'
}
Ми хочемо змінити тільки ім'я.
const response = await axios.patch(
      'https://dummyjson.com/users/1',
      { firstName: 'Peter' });
Тобто:
PUT   → змінити весь об'єкт
PATCH → змінити частину об'єкта

9. DELETE — видалити
   const response = await axios.delete(
      'https://dummyjson.com/users/1'
   );

console.log(response.data);
Тобто:
axios.delete(URL)

11. А ще краще — зробити api.service.ts

Ти вже працювала з api.service.ts. Axios дуже добре підходить для такого підходу.

Наприклад:

import axios from 'axios';

const baseUrl = 'https://dummyjson.com';

export const userService = {
getAllUsers: async () => {
const response = await axios.get(`${baseUrl}/users`);

        return response.data;
    },

    getUserById: async (id: number) => {
        const response = await axios.get(`${baseUrl}/users/${id}`);

        return response.data;
    },

    deleteUser: async (id: number) => {
        const response = await axios.delete(`${baseUrl}/users/${id}`);

        return response.data;
    }
};
