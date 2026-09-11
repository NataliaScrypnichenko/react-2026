import {useForm} from "react-hook-form";



interface IFormProps{
    username: string,
    password: string,
    age: number,

}
//все що є в формі =воно є стрінгою
const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState:{errors,isValid}
    } = useForm<IFormProps>({
        mode:'all'
    });

    //так ми привязуемо дані до інпута
    const customHandle=(formDataProps:IFormProps) =>{
        console.log(formDataProps)// сприймаємо як якусь дію
    }


    return (
        <div>
             <form onSubmit={handleSubmit(customHandle)}>
                <label>
                    <input  type="text" {...register('username',{
                     required:{value:true, message:'name is required'},
                     // pattern:{
                     //     value:/\w+/,
                     //     message:'wrong name'
                     // }
                     minLength:{value:4, message:'wrong name'}
                 }  )} />

                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>
                 <label>
                 <input  type="text" {...register('password',
                     {
                         required:true,
                         minLength:{value:3,message:'pass too short'},
                         maxLength:{value:12, message:'pass too long'}
                     })}/>
                     <div>{errors.password && <div>{errors.password.message}</div>}</div>
                 </label>
                 <label>
                 <input type="number" {...register('age',
                     {
                         required:true,
                         valueAsNumber:true, // це означає що автоматично конвертується в числове значення
                         min:{value:1, message:'age too small'},
                         max:{value:117, message:'age too big'}

                     })} />
                     <div>{errors.age && <div>{errors.age.message}</div>}</div>
                 </label>
                 <button disabled={!isValid}>spend</button>
             </form>
        </div>
    );
};
//виводимо меседжес під цими інпутом
//воно буде викидати на новий рядок, то краще оформити через блоки в css дісплей блоком, щоб такого не було
// то потрібні другі бібліотеки
export default FormComponent;
