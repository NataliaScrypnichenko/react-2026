import './App.css'
import MainComponent from "./components/MainComponent.tsx";
import HeaderComponent from "./components/HeaderComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


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
      <MyContext.Provider value={{
        theme: 'light',
        toggleTheme: toggleTheme,
      }}>
          <div className={theme}>
               <MainComponent/>
               <HeaderComponent/>
          </div>
      </MyContext.Provider>
    </>
  )
}

export default App
//Сторінка відкривається зі світлою темою
