//читає її тему
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const MainBranchThemeComponent = () => {
  //отримаю тему
    const {theme} = useContext(MyContext);

    return (
        <div>
            Main Branch Theme Component
            <p>Current theme: {theme} </p>
        </div>
    );
};

export default MainBranchThemeComponent;
//setTheme змінює стан і React оновлює компоненти, які використовують Context.
// так він показує нову тему, а фон сторінки змінюється.
