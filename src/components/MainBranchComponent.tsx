import MainBranchAAComponent from "./MainBranchAAComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const MainBranchComponent = () => {
    // отримаю тему
    const { theme } = useContext(MyContext);

    return (
        // Додала клас branch-card для оформлення картки.Додала ${theme}, щоб CSS міг змінювати вигляд картки.
        <div className={`branch-card ${theme}`}>
            <h3>Main Branch Component</h3>
            <p>Це друга гілка основного розділу.</p>
            {/*Залишилa дочірній компонент MainBranchAAComponent*/}
            <MainBranchAAComponent />
        </div>
    );
};

export default MainBranchComponent;
