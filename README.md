тут бібліотеки
useForm = потрібно валідувати і є 2 варіанти
1 але він не дужеихороший,тому що пуста фарма є звалідована і її вирішують додаткові бібліотеки які всі їх використовують,хоча можна розтавити кастилі і вони будуть працювати
formState:{errors, isValid}/errors=помилки які будуть виникати і їх повідомлення\\isValid= буде показувати форма валідна чи ні,Valid=форма є валідна коли кожний її інпут відповідає певній умові перевірці, а коли хоч один не відповідає то форма не валідна

Валідовати об'єкт можемо через другий аргумент в функції register {...register('username',{})}
<input  type="text" {...register('username',{
     required:true,
     pattern:{
        value:/\w+/,
        message:'wrong name'
     }//це ми прописуємо умову , якщо щось не так записано видіється сообщеніе 'wrong name',його можна замінити на 
     
})} />

<form onSubmit={handleSubmit(customHandle)}>
                 <input  type="text" {...register('username',{
                     required:true,
                     // pattern:{
                     //     value:/\w+/,
                     //     message:'wrong name'
                     // }
                     minLength:{value:1, message:'wrong name'}
                 }  )} />
                 <input  type="text" {...register('password',
                     {
                         required:true,
                         minLength:{value:3,message:'pass too short'},
                         maxLength:{value:6, message:'pass too long'}
                     })}/>
                 <input type="number" {...register('age',
                     {
                         required:true,
                         valueAsNumber:true, // це означає що автоматично конвертується в числове значення
                         min:{value:1, message:'age too small'},
                         max:{value:117, message:'age too big'}

                     })} />
                  <button disabled={!isValid}>spend</button>// для того щоб активовувати чи дезеактивовувати кнопку
             </form>
тепер це означає що ту інформацію яку будем водитит інформацію тобто перевірятися на всьому єтапі

const {
     handleSubmit,
     register,
     formState:{},
} = useForm<IFormProps>({
         mode:'аll'//стрінгове значення режим перевірки коли будуть валідуватися,onChange-коли будемо водити нове                   значення
                //onTouched=коли будем фокусуватися на форму.\onSubmit=коли будем відправляти форму
                / \onBlur= коли будемо втрачатифокус із інпута форми./all-це  всі тригери
});
 це означає що в будь-якому варіанті будем валідувати форму
