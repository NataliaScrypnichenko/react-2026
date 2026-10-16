import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {

    const {counterValue,increment} = useContext(MyContext);
    
    return (
        <div>
            Right Branch A
            {/*функція викликає increment оскільки він передається через провайдез value= то через
             хук useContext який дозволяє нам доступитися */}
            <button onClick={()=>{
                  increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};

export default RightBranchA;
