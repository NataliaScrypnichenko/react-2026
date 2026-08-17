export interface ICommentDummy {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: RootObjectUser;
}
export interface RootObjectUser {
	id: number;
	username: string;
	fullName: string;
}
