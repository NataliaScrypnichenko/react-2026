import './App.css'
import {useState} from "react";

const App = () => {

    // eslint-disable-next-line prefer-const
    let [counter,setCounnter] = useState<number>(0);//-це незмінний стан
    console.log('mount');
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounnter(++counter)
                // console.log(counter)
            }}>increment
            </button>
            <button onClick={() => {
                setCounnter(prevState => {
                      // тут можемо писати що потрібно і даже відправляти інформацію і обробляти
                    // це добре якщо хочу знати попередній стан і на основі нього вже змінювати стан, то б то від чогось відштовхуватися
                    // eslint-disable-next-line no-useless-assignment
                    return --prevState ;
                })
                // console.log(counter)
            }
            }>decrement
            </button>
        </div>
    )
}

export default App
