import type {IUserDummy} from "./IUserDummy.tsx";

export interface IUsersDummyjson {
	users: IUserDummy[];
	total: number;
	skip: number;
	limit: number;
}
