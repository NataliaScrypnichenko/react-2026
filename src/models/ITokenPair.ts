// Модель описує об'єкт, який сервер повертає
// при оновленні токенів.
// accessToken — новий токен для доступу до ресурсів.
// refreshToken — токен, за допомогою якого можна отримати новий accessToken.
export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
};
