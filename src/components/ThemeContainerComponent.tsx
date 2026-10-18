import { useContext, type ReactNode } from "react";
import { MyContext } from "../context/MyContext.tsx";
//ип для вмісту, який може відображатися в React, зокрема інших компонентів
type ThemeContainerProps = {
    children: ReactNode;
};

const ThemeContainerComponent = ({ children }: ThemeContainerProps) => {
    // отримую актуальну тему з Context.
    const { theme } = useContext(MyContext);


    return (
        <div className={theme}>
            {/*відображає всередині всі компоненти, які передала в ThemeContainerComponent*/}
            {children}

        </div>
    );
};

export default ThemeContainerComponent;
// Тепер клас теми встановлюватиметься не безпосередньо в App.tsx,
// а в компоненті, який читає тему з Context
