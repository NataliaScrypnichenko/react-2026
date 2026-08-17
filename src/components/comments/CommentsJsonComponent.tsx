import {useEffect, useState} from "react";
import type {ICommentsJson} from "../../model/comments/ICommentsJson.ts";
import CommentJsonComponent from "./CommentJsonComponent.tsx";

const CommentsJsonComponent = () => {

    const [comments, setComments] = useState<ICommentsJson[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(value => setComments(value));
    },[]);

    return (
        <div>
            {
                comments.map((comment) => (<CommentJsonComponent comment={comment} key={comment.id} />))
            }
        </div>
    );
};

export default CommentsJsonComponent;
