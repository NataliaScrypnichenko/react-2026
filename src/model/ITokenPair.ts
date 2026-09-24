//коли пропав головний токен то робимо запит на отримання нових токенів= рефреш то потрібна така модель

export interface ITokenPair {
	accessToken: string;
	refreshToken: string;
}
