// Функція дістає об'єкт з localStorage.
//
// <T> — generic, який дозволяє при виклику функції
// самостійно вказати, якого типу буде отриманий об'єкт.
//
// Наприклад:
// retriveLocalStorage<IUserWithTokens>('user')
//
// У цьому випадку TypeScript знає,
// що результатом буде IUserWithTokens.
export const retriveLocalStorage =<T>(key:string)=>{

    // Дістаємо значення з localStorage за переданим ключем.
    //
    // localStorage.getItem() може повернути string або null.
    //
    // || '' означає: якщо значення null,
// тоді використати порожній рядок.
    const object= localStorage.getItem(key) || '';

    // Якщо object порожній,
    // повертаємо порожній об'єкт,
    // але повідомляємо TypeScript,
    // що він має тип T.
    if(!object){
        return {} as T;
    }

    // JSON.parse перетворює JSON-рядок назад у JavaScript-об'єкт.
    const parse = JSON.parse(object);

    // Повертаємо отриманий об'єкт як тип T.
    //
    // Завдяки цьому при виклику:
    // retriveLocalStorage<IUserWithTokens>('user')
    //
    // TypeScript дозволяє звертатися до:
    // .accessToken
    // .refreshToken
    // .username
    // тощо.
    return parse as T;
};
