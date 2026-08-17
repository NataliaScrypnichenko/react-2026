import type {IPostDummy} from "./IPostDummt.ts";

export interface IPostsDummyjsont {
	posts:IPostDummy[];
	total: number;
	skip: number;
	limit: number;
}
