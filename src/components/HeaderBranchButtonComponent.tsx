//змінює тему,
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const HeaderBranchButtonComponent = () => {
    //хук дозволяє мені підключити кнопку
    const {theme,toggleTheme} = useContext(MyContext);

    return (
        <div className={`branch-card ${theme}`}>
            <h3>Header Branch Button Component</h3>
            <p>Це четверта гілка заголовка з кнопкою зміни теми де і присутня ця кнопка.</p>
            {/*передаю сюди функцію яка буде викликати після натискання кнопки*/}
            <button onClick={toggleTheme}>
                change the theme color
            </button>
        </div>
    );
};

export default HeaderBranchButtonComponent;
//Натискаю кнопку і викликається  функція toggleTheme з App.tsx
