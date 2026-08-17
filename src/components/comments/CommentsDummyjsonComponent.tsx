import {useEffect, useState} from "react";
import CommentDummyjsonComponent from "./CommentDummyjsonComponent.tsx";
import type {ICommentDummy} from "../../model/comments/ICommentDummy.tsx";


const CommentsDummyjsonComponent = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        fetch(" https://dummyjson.com/comments")
            .then(res => res.json())
            .then(value => setComments(value.comments));
    },[]);

    return (
        <div>
            {
                comments.map((comment) => (<CommentDummyjsonComponent comment={comment} key={comment.id} />))
            }
        </div>
    );
};

export default CommentsDummyjsonComponent;
