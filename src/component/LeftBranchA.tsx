import { useContext} from "react";
import {MyContext} from "../contetx/MyContext.tsx";

const LeftBranchA = () => {
//говоримо який контекст повинен зчитувати MyContext і відасть counterValue
    const {counterValue} = useContext(MyContext)
    
    return (
        <div>
            LeftBranch A
            <p> current counter value is = {counterValue}
                </p>
        </div>
    );
};

export default LeftBranchA;
