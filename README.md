#UYuu2f1

Беремо код, з уроку доводимо до автоматизму:
Впровадити валідацію відповідно до документації апі (http://bigbird.space/carsAPI/v1/doc), щоб не можна було зберегти автівку, якщо вона не відповідає умовам
!!! Не забувайте про те, що потрібно все поділяти на компоненти, але без надлишку (окремий інпут не має сенсу обгортки в компонент)
Як завжди: стилізація мінімальна, але присутня, щоб не забувати, як її роби

зауваження вчителя

1)year: Joi.number().min(1190) слідкуємо за вимогами. це критично в майбутньому
виправила.

2)Зробіть обробку помилок на випадок, якщо запит не дав відповіді
.\\Зробила обробку в CarsComponent
const [cars, setCars] = useState<ICar[]>([]);
const[error,setError]= useState<string>('')\\\
      useEffect(() => {
          getAllCars()
            .then(value => setCars(value))
            .catch(() => {
                setError('Не вдалося отримати список автомобілів');
            });
      }, []);
    return (
        <div className={'container_div'}>
            {error && <p>{error}</p>}


3)ставимо  .required() у валідаторі на полях які обов'язкові для АПІ
4)Додай .integer() до price і year в Joi-схемі
5)Повідомлення "string.min"/"string.max" у price і year (carValidator.tsx:9,10,13) ніколи не спрацюють - для чисел Joi кидає коди "number.min"/"number.max", тому зараз завжди показується дефолтне англійське повідомлення Joi, а не твоє. Функціонально працює, але задумані тексти не показуються

Всі помилки 3 по 5 в carValidator-виправила
export const carValidator = Joi.object({
brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required().messages({
"string.pattern.base":"Your brand value didn't match pattern. ",
}),
price: Joi.number().integer().min(0).max(1000000).required().messages({
"number.integer": "Price must be an integer",
"number.min":"mim price is 0 ",
"number.max":"max price is 1 000 000 "
}),
year: Joi.number().integer().min(1990).max(2026).required().messages({
"number.integer": "Year must be an integer",
"number.min":"mim year is 1990 ",
"number.max":"max yer is 2026 "
}),
})
