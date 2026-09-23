import {useEffect} from "react";
import {Login} from "../../service/api.servise.ts";

//робим логінацію як переходим на сторінку  і тут же передаємо інформацію тобто він уже є
const LoginComponent = () => {

    useEffect(() => {
        // даємо дані які вже є в сервері є і який час буде в системі
        Login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <div>

        </div>
    );
};

export default LoginComponent;
