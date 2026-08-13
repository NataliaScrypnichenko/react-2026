import type {FC} from "react";
import type {ICommentJson} from "../../models/ICommentJson.ts";


type TypeCommentJsonProps = {
    comment:ICommentJson
}

const CommentComponent:FC<TypeCommentJsonProps> = ({comment}) => {
    return (
        <div>
             <p>{comment.id}{'=='}{comment.postId}</p>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>

        </div>
    );
};

export default CommentComponent;
