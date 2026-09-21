export const retriveLocalStorage= <T>(key:string)=>{
    //сюди приходить об'єк або нічого або стрінгового типу
    const object = localStorage.getItem(key) || '';
    // перевырка якщо не ыснуэ обёэкта то опвертаэм пустий об`экт
    if(!object){
        return {} as T;
    }
    // а буде то
    const parse= JSON.parse(object);
    //повертаємо строго типизований
    return parse as T;
}
