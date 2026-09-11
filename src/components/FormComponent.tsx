import {useForm} from "react-hook-form";

interface IFormProps{
    username: string,
    password: string,
    age: number,

}
//все що є в формі =воно є стрінгою
const FormComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();
    // console.log(register);

    const customHandle=(formDataProps:IFormProps) =>{
        console.log(formDataProps)
    };

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
