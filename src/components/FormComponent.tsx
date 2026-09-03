import {type FormEvent, useState} from "react";

interface FromProps {
    username: string;
    password: string;
}


const FormComponent = () => {
    // //це записує але не контролює onChange={handler}
    // const handler=(event:FormEvent<HTMLFormElement>)=> {
    //         console.log( event)
    // }

    //створюю стан для форми
    const [formState, setFormState] = useState<FromProps>({
        username: 'foobar',//тобто не фікситься не міняється
        password:' 1111',
    })
////привязуємо інформацію до інпутів
//     const hendleSumbmit=(event:FormEvent<HTMLFormElement>)=> {
//         event.preventDefault()//не перезавантажувався сайт
//         // console.log(event)
//         // console.log(event.target) дивимось на нього
//         // console.log(event.target)
//         //дістаємо форму
//         const form=event.target as HTMLFormElement;
//         console.log(form);//з формою можна працювати із цього можна формувати об'єкт і відправляти якщо це обхідно
//         console.log(form.username.value)
//         console.log(form.password)
//     }
    // будем контролювати за допомогою useState<FromProps> через інпути є 2 способи =>1
    const hendleSumbmit=(event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        //відправляємо данні
        const user={
            username:formState.username,
            password:formState.password};
        console.log(user);

    };


    // const handelUsernameChange=(event:FormEvent<HTMLInputElement>) =>{
    //      const input = event.target as HTMLInputElement;//отримуємо об'єкт target
    //    console.log( input.value) //
    //     setFormState({...formState, username:input.value})// передаємо об'єкт деструктетизований// коли ми водимо в обєкт
    //         // знасеня то отримуємо в новий об'єкт будем деструктуризувати поточний стан стейт і тут ми кажемо що будемо
    //     // перевизначати об'єкт тобто з потточного велю беремонейм і записуємо його
    //
    // }
    // const handelPasswordChange=(event:FormEvent<HTMLInputElement>) =>{
    //     const input = event.target as HTMLInputElement;//отримуємо об'єкт target
    //     console.log( input.value) //
    //     console.log( input.name)
    //     setFormState({...formState, password:input.value})
    // }


    //спосіб 2й
    const handelInputChange=(event:FormEvent<HTMLInputElement>) =>{
        const input = event.target as HTMLInputElement;//отримуємо об'єкт target
        console.log( input.name)
        // дістаємо данні
        setFormState({...formState, [input.name]: input.value})
    }



    return (
        <div>
            {/*<form onSubmit={hendleSumbmit}>*/}
            {/*    <input name="username" type="text" value={formState.username} onChange={handelUsernameChange}/>*/}
            {/*    <input name="password" type="text" value={formState.password} onChange={handelPasswordChange}/>*/}
            {/*    <button>send</button>*/}
            {/*</form>*/}
            <form onSubmit={hendleSumbmit}>
                <input name="username" type="text" value={formState.username} onChange={handelInputChange}/>
                <input name="password" type="text" value={formState.password} onChange={handelInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
