import type {FC} from "react";
import type {ICommentJson} from "../../models/ICommentJson.ts";
import'./CommentComponent.css'

type TypeCommentJsonProps = {
    comment:ICommentJson
}

const CommentComponent:FC<TypeCommentJsonProps> = ({comment}) => {
    return (
        <div>
            <div className={'div-comment-json'}>
                <p>{comment.id}{'=='}{comment.postId}</p>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>


        </div>
    );
};

export default CommentComponent;
