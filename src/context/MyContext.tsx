import {createContext} from "react";

//створюємо тип данних яких буде в середині контексту
type MyContextType={
    theme: string,
    toggleTheme: (object:string) => void,
};

// описуємо defaultValue, тому що в Java ми ставили null і описували в іншому місці, а в TypeScript і тут
// і в іншому місці визначити потрібно
const defaultValue = {
    theme: '',
    toggleTheme: (object:string) => {
        console.log(object);
    },
};

//створюємо сховище який буде характеризувати цей MyContext.
export const MyContext = createContext<MyContextType>(defaultValue);
