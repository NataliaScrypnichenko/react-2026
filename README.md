тут бібліотеки    "react-hook-form": "^7.51.3"



//все що є в формі =воно є стрінгою

//useForm його типізуємо під форму яка нам потрібна - цей хук повертає об'єкт в якому є багато різноманітних методів тож тоді можна дистриктуризувати форму
const {handleSubmit}-це обробник і він ставиться на onSubmit={handleSubmit},але він є обгорткою і він повинен приймати кголбек фукцію з логікою <form onSubmit={handleSubmit(customHandle)}> пишемо логіку .На спрпавді в нашому об'єкту який визначили в середині колбек форми, повинен зберігатися об'єкт який характеризує поля об'єкта, але для того щоб вони набивалися їх потрібно зарегіструвати для цього є спеціальний метод  {register}-також будем дес-вати з форми useForm.console.log(register);= в ньому є логіка якою він привязується до інпута в якому цей метод буде оголошено <input  type="text" {...register('username')} />////// console.log(register('username'))= воно форму є ключ name і значення 'username'

console.log(formDataProps)= це об'єкт formDataProps= просто наповнився інформацією автоматично з інпутов яка вказана в колбек функії  
const customHandle=(formDataProps:IFormProps) =>{
console.log(formDataProps)
}
для того щоб побачити ми натискаємо кнопку сенд то буде так {
"username": "cv bcv",
"password": "vcfc",
"age": "23"
}


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import {useForm} from "react-hook-form";

interface IFormProps{
username: string,
password: string,
age: number,

}

const FormComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();
    console.log(register);
    
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
