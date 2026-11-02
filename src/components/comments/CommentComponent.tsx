import type {FC} from "react";
import type {IComment} from "../../model/IComment.ts";

// Створюю тип CommentsPropsType, який описує властивості (props), що отримує компонент
type CommentsPropsType={
    comment: IComment;
};

// Створюємо CommentComponent для виведення даних
const CommentComponent:FC<CommentsPropsType> = ({comment}) => {
    return (
        <div>
            <div>
                <p>{comment.postId}</p>
                <p>{comment.name}/{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentComponent;
