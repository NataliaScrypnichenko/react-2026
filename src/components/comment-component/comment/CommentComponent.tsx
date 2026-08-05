import type {FC} from "react";
import type {CommentsModel} from "../../../models/comments-model/CommentsModel.ts";
import './CommentComponent.css'

type CommentType = {
    comment: CommentsModel;
}

const CommentComponent:FC<CommentType> = ({comment} ) => {


    return (
        <div>
            <div className={'div_comment'}>
                <h1>{comment.id}{'-'}{comment.postId}</h1>
                <p>User:{comment.user.id}</p>
                <p>username:{comment.user.username}</p>
                <p>fullName:{comment.user.fullName}</p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentComponent;
