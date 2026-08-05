import type {CommentsModel} from "./CommentsModel.ts";

export interface IComment {
	comments: CommentsModel[];
	total: number;
	skip: number;
	limit: number;
}
