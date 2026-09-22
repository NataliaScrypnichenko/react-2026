//коли аутентифікуємося то отримуємо модель даних
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
}
