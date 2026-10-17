//змінює тему,
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const HeaderBranchButtonComponent = () => {
    //хук дозволяє мені підключити кнопку
    const {toggleTheme} = useContext(MyContext);

    return (
        <div>
            Header Branch Button Component
            {/*передаю сюди функцію яка буде викликати після натискання кнопки*/}
            <button onClick={toggleTheme}>
                change the theme color
            </button>
        </div>
    );
};

export default HeaderBranchButtonComponent;
//Натискаю кнопку і викликається  функція toggleTheme з App.tsx
