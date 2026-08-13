import type {IUserDummyModel} from "./IUserDummyModel.ts";

export interface IUserDummy {
	users: IUserDummyModel[];
	total: number;
	skip: number;
	limit: number;
}
