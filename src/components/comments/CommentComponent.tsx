import type {FC} from "react";
import type {IComment} from "../../model/IComment.ts";

type CommentsTypeProps = {
    comment: IComment;
};


const CommentComponent:FC<CommentsTypeProps> = ({comment}) => {
    return (
        <div>
            {
                <div>
                    <p>{comment.id} : {comment.postId} : {comment.name} </p>
                    <p>{comment.email}</p>
                    <h3>{comment.body}</h3>
                </div>
            }
        </div>
    );
};

export default CommentComponent;
