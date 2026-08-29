import type {IUser} from "./IUser.ts";
import type {Support} from "./Support.ts";
import type {meta} from "./meta.ts";

export interface IResponseUser {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IUser[];
	support: Support;
	_meta: meta;
}




