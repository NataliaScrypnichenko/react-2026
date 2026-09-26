import {Outlet} from "react-router";
import Menu from "../component/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            {/* Menu є спільним для всіх сторінок, які знаходяться всередині MainLayout. */}
            <Menu/>

            {/* Візуально відділяємо меню від основного контенту. */}
            <hr/>

           {/*Outlet показує дочірній компонент, який відповідає поточному URL.*/}
            <Outlet/>
        </div>
    );
};

export default MainLayout;
