import LeftBranchA from "./LeftBranchA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {

   const memox=useMemo(()=>{
       for(let i=0; i<100; i++){
           console.log(i);
       };
       return null;
   },[]);//тепер прикліку не буде виконуватися постояно ітератор на 100 тобто зараз змінюється каунтер
    // але в жодному разі не працює логіка томещо вона мемонізована

    return (
        <div>
            LeftBranch
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;
// / /якщо захочу щоб вона від парацювала на постійній основі то потрібно за юзати контекст або
// зробити якийсь аргумент пропсу або поставити сюди dependency тобто ту частинку за якою ця функція юзмемо буде
// слідкавати
