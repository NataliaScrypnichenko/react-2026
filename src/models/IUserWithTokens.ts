// Модель описує користувача разом із токенами,
// які ми отримуємо після успішної авторизації.
// Тобто сервер повертає не тільки інформацію про користувача,
// а також accessToken і refreshToken.
export interface IUserWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
};
