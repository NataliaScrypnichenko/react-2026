import type {ICommentDummy} from "../../model/comments/ICommentDummy.tsx";
import type {FC} from "react";


type CommentDummyjsonTypeProps = {
    comment: ICommentDummy;
}

const CommentDummyjsonComponent:FC<CommentDummyjsonTypeProps> = ({comment}) => {
    return (
        <div>
            <h2>CommentDummyjson</h2>
            <div>
                <p>{comment.id}={comment.postId}</p>
                <p>body:{comment.body}</p>
                <p>likes:{comment.likes}</p>
                <ul>
                    <li>user:{comment.user.id}</li>
                    <li>{comment.user.fullName}</li>
                    <li>{comment.user.username}</li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default CommentDummyjsonComponent;
