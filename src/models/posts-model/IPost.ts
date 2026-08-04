import type {PostsModel} from "./PostsModel.ts";

export interface IPost {
	posts: PostsModel[];
	total: number;
	skip: number;
	limit: number;
}
