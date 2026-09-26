import LoginComponent from "../component/login/LoginComponent.tsx";

const LoginPage = () => {
    return (
        <div>
            {/* LoginPage відповідає за сторінку /login.
                Всередині сторінки розміщуємо LoginComponent,
                який виконує авторизацію. */}
            <LoginComponent/>
        </div>
    );
};

export default LoginPage;
