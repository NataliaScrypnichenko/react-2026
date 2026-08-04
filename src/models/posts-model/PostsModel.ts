export interface PostsModel {
	id: number;
	title: string;
	body: string;
	tags: TargsString[];
	reactions: Reactions;
	views: number;
	userId: number;
}
export interface Reactions {
	likes: number;
	dislikes: number;
}
export interface TargsString{
    tags: string;
}
