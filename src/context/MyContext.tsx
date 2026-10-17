import {createContext} from "react";

//створюємо тип данних яких буде в середині контексту
type MyContextType={
    theme: string,
    toggleTheme: () => void,//викликаю тему, щоб перемикнути її
};

// описуємо defaultValue, тому що в Java ми ставили null і описували в іншому місці, а в TypeScript і тут
// і в іншому місці визначити потрібно- це початкове значення і є світла тема
const defaultValue:MyContextType = {
    theme: 'light',
    toggleTheme: () => {},
};

//створюємо сховище який буде характеризувати цей MyContext.
export const MyContext = createContext<MyContextType>(defaultValue);
