export interface IPosts {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: RootObjectReactions;
	views: number;
	userId: number;
}
export interface RootObjectReactions {
	likes: number;
	dislikes: number;
}
