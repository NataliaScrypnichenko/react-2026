import {useContext} from "react";
import {MyContext} from "../contetx/MyContext.tsx";

const RightBranchA = () => {
    //хук дозволя доступитися відповідного контексту який ми його визначимо
    const {counterValue,increment} =useContext(MyContext);

    return (
        <div>
            RightBranch А
            {/*колбек функція повина викликати increment,оскільки він передається в провайлеру value тобто підоб'єкті
            який ішерить між всіми рівнями інформації то черех хук useContext() */}
            <button onClick={()=>{
                // передаємо сюди increment а він підкапотом буде збільшуватися
                increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};


export default RightBranchA;
//тобто натискаємо кнопку на бренчі RightBranchA а дані змінюються на другій бренчі LeftBranchA
