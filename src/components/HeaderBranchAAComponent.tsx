import HeaderBranchButtonComponent from "./HeaderBranchButtonComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const HeaderBranchAAComponent = () => {

    const {theme} = useContext(MyContext)

    return (
        <div className={`branch-card ${theme}`}>
            <h3> Header Branch AAComponent</h3>
            <p>Це третя гілка заголовка з кнопкою зміни теми.</p>
            <HeaderBranchButtonComponent/>
        </div>
    );
};

export default HeaderBranchAAComponent;
