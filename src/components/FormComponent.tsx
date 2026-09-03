import {useForm} from "react-hook-form";


interface IFormProps{
    name: string,
    password: string,
    age: number,

}
//все що є в формі =воно є стрінгою
const FormComponent = () => {
   const useForm1 = useForm<IFormProps>();
  console.log(useForm1);//повертає об'єк і там видно багото способів

    return (
        <div>
             <form>
                 <input name={"username"} type="text" />
                 <input name={"password"} type="text" />
                 <input name={"age"} type="number" />
                 <button>spend</button>
             </form>
        </div>
    );
};

export default FormComponent;
