import {useEffect} from "react";
import {Login} from "../../service/api.servise.ts";


// Компонент виконує авторизацію.
// У цьому завданні дані користувача захардкоджені.
// Тобто вони не вводяться через форму,
// а використовуються як тестові дані,
// які надає API DummyJSON.
const LoginComponent = () => {

    useEffect(() => {

        // useEffect виконується після появи компонента на сторінці.
        // Викликаємо Login і передаємо тестові дані користувача.
        // username і password — тестовий користувач DummyJSON.
        // expiresInMins — час дії токена в хвилинах.
        Login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });

        // Порожній масив означає,
        // що цей ефект виконається один раз після монтування компонента.
    }, []);

    return (
        <div>

        </div>
    );
};

export default LoginComponent;
