//читає її тему
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const MainBranchThemeComponent = () => {
  //отримаю тему
    const {theme} = useContext(MyContext);

    return (
        <div className={`branch-card ${theme}`}>
            <h3> Main Branch Theme Component</h3>
            <p>Це четверта гілка основного розділу.</p>
            <p>Current theme: {theme} </p>
        </div>
    );
};

export default MainBranchThemeComponent;
//setTheme змінює стан і React оновлює компоненти, які використовують Context.
// так він показує нову тему, а фон сторінки змінюється.
