import {useForm} from "react-hook-form";


interface IFormProps{
    username: string,
    password: string,
    age: number,

}
//все що є в формі =воно є стрінгою
const FormComponent = () => {
  //  const useForm1 = useForm<IFormProps>();
  // console.log(useForm1);//повертає об'єк і там видно багото способів методів тобто розкрити його
  //   // і побачити що з ним можливо робити


    //деструктиризуємо форму- handleSubmit це обробник він ставиться на onSubmit, але він handleSubmit є обгортка
    // і в себе приймає колбек функцію ()=>{}
    //register-привязується до інпуту в якому він знаходиться ту інформацію яку ми визначемо
    const {handleSubmit, register} = useForm<IFormProps>();
    console.log(register)
    //так ми привязуемо дані до інпута
    const customHandle=(formDataProps:IFormProps) =>{
        console.log(formDataProps)
    }


    return (
        <div>
             <form onSubmit={handleSubmit(customHandle)}>
                 <input  type="text" {...register('username')} />
                 <input  type="text" {...register('password')}/>
                 <input type="number" {...register('age')} />
                 <button>spend</button>
             </form>
        </div>
    );
};

export default FormComponent;
