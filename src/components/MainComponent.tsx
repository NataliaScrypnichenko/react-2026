import MainBranchComponent from "./MainBranchComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const MainComponent = () => {
    // отримаю тему
    const { theme } = useContext(MyContext);
    return (
        <div className={`branch-card ${theme}`}>
           <h3> Main Component</h3>
            <p>Це перша гілка основного розділу.</p>
            <MainBranchComponent/>
        </div>
    );
};

export default MainComponent;
