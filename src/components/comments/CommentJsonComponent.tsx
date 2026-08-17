import type {ICommentsJson} from "../../model/comments/ICommentsJson.ts";
import type {FC} from "react";

type TypeCommentProps = {
    comment: ICommentsJson;
}

const CommentJsonComponent:FC<TypeCommentProps> = ({comment}) => {
    return (
        <div>
            <div>
                <p>{comment.id}={comment.postId}</p>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentJsonComponent;
