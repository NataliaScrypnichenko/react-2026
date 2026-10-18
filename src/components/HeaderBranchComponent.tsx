import HeaderBranchAAComponent from "./HeaderBranchAAComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const HeaderBranchComponent = () => {
    const { theme } = useContext(MyContext);// отримаю тему

    return (
        // Додала клас branch-card для оформлення картки.Додала ${theme}, щоб CSS міг змінювати вигляд картки.
        <div className={`branch-card ${theme}`}>
            <h3>Header Branch Component</h3>
            <p>Це друга гілка заголовка з кнопкою зміни теми.</p>

            <HeaderBranchAAComponent />
        </div>
    );
};

export default HeaderBranchComponent;
