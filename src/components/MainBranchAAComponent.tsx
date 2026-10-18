import MainBranchThemeComponent from "./MainBranchThemeComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const MainBranchAAComponent = () => {
    // отримаю тему
    const { theme } = useContext(MyContext);
    return (
        // Додала клас branch-card для оформлення картки.Додала ${theme}, щоб CSS міг змінювати вигляд картки.
        <div className={`branch-card ${theme}`}>
            <h3>Main Branch АА Component</h3>
            <p>Це третя гілка основного розділу.</p>
            {/*Залишилa дочірній компонент MainBranchAAComponent*/}
            <MainBranchThemeComponent/>
        </div>
    );
};

export default MainBranchAAComponent;
