import HeaderBranchComponent from "./HeaderBranchComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const HeaderComponent = () => {
    // отримаю тему
    const { theme } = useContext(MyContext);
    return (
        <div className={`branch-card ${theme}`}>

            <h3>Header Component</h3>
            <p>Це перша гілка заголовка з кнопкою зміни теми.</p>
            <HeaderBranchComponent/>
        </div>
    );
};

export default HeaderComponent;
