import './App.css'
import RightBranch from "./component/RightBranch.tsx";
import LeftBranch from "./component/LeftBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
//основне сховище знаходиться на рівні АРР там де контекст визначає свій рівень
    const [counter, setCounter] = useState<number>(init.counterValue)//cюди
                                                   // визначаємо дефолтне значення нуль або init.counterValue

  return (
    <>
        {/*Обгортаємо всі компоненти які будуть ділити або шерити це сховище.
        Буде пропса value={init} і це діятиме тільки в одному випадку на отримання даних на считування даних із counterValue
         Зараз ми змінюємо данні
         якщо я хочу використовувати контекст в якості сховища мені потрібно обов'язково зав'язувати його
          на стейті і зав'язуіати його цілком.то бто дефолтне значення useState те що лежить у мене на рівні MyContext
          мого дефолтного обёэта .Відповідно сюди counter буде підтягувати оновлене значення і щойно він буде оновлюватися
           і в контекстт буде впроваджувати кожного разу оновлене значення.Відповідно якщо тут впровадженно
           оновлене значення, то це означає що Left Branch A там деми доступаємося до контексту і витягуємо counterValue
           то ми витягаємо поточне значення от сюда  counterValue:counter,
         */}
        <MyContext.Provider value={{
            counterValue:counter,
            increment:(obj)=>{
                setCounter(++obj);
                console.log(obj)
            }
        }} >
            <RightBranch/>
            <LeftBranch/>
        </MyContext.Provider>

    </>
  )
}

export default App
