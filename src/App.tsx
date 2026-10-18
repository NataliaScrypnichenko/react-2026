import './App.css'
import MainComponent from "./components/MainComponent.tsx";
import HeaderComponent from "./components/HeaderComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";
import ThemeContainerComponent from "./components/ThemeContainerComponent.tsx";


function App() {
// саме сховище буде знаходитися на рівні АРР там де контекст-зберігатиметься тема та функція, яка її змінює

    //зберігаю поточну тему
    const [theme, setTheme] = useState('light');

    //створю функцію перемикання теми
      const toggleTheme = () => {
        setTheme(theme ==='light' ? 'dark' : 'light');
        //якщо theme === "light", встановити "dark";інакше встановити "light".
      };

  return (
    <>
      {/*  Provider передає тему та функцію.*/}
      <MyContext.Provider value={{
          theme: theme,
        toggleTheme: toggleTheme,
      }}>
          {/*ThemeContainerComponent читає тему через useContext і встановлює CSS-клас.*/}
          <ThemeContainerComponent>
              {/*Усередині контейнера відображаються обидві гілки дерева.*/}
              <MainComponent />
              <HeaderComponent />
          </ThemeContainerComponent>
      </MyContext.Provider>
    </>
  )
}

export default App
//Сторінка відкривається зі світлою темою
