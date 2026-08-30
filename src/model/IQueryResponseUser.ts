import type {IUser} from "./IUser.ts";

export interface IQueryResponseUser {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
};
