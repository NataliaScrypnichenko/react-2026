import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";
import './Comment.css'

type CommentPropsType = {
    comment: IComment;
}

const Comment:FC<CommentPropsType> = ({comment}) => {
    return (
        <>
            <div className={'div_comment'}>
                <h1>{comment.postId}{'-'}{comment.id}</h1>
                <h6>{comment.name} {'-'} {comment.email}</h6>
                <p>{comment.body}</p>
            </div>
        </>
    );
};

export default Comment;
