// метод типізація об'єкта з localStorage в середині буде дженерік
export const retriveLocalStorage =<T>(key:string)=>{
    //дістаємо по ключу і первіряєм щоб об'єкт був стрінговий
    const object= localStorage.getItem(key) || '';
    //перевірка якщо не існує object то типізуєм
    if(!object){
        return {} as T;
    }
    //якщо ні то створюю зміну
    const parse = JSON.parse(object);
    // повертаю строго типізованого
    return parse as T;
};
