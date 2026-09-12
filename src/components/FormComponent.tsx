import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator.ts";

interface IFormProps{
    username: string,
    password: string,
    age: number,
};
//все що є в формі =воно є стрінгою
const FormComponent = () => {

    const {handleSubmit, register, formState:{errors,isValid}} = useForm<IFormProps>({
        //привязуємо валідатор
        mode:'all', resolver:joiResolver(userValidator)
    });

    const customHandle=(formDataProps:IFormProps) =>{
        console.log(formDataProps)// сприймаємо як якусь дію
    };

    return (
        <div>
             <form onSubmit={handleSubmit(customHandle)}>
                <label>
                    <input  type="text" {...register('username' )}/>
                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>

                 <label>
                 <input  type="text" {...register('password',)}/>
                     <div>{errors.password && <div>{errors.password.message}</div>}</div>
                 </label>

                 <label>
                 <input type="number" {...register('age')} />
                     <div>{errors.age && <div>{errors.age.message}</div>}</div>
                 </label>

                 <button disabled={!isValid}>spend</button>
             </form>
        </div>
    );
};
export default FormComponent;
