import {useEffect, useState} from "react";
import type {ICommentJson} from "../../models/ICommentJson.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentJson[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then((data) => setComments(data));
    },[])

    return (
        <div>
            {
                comments.map((comment) => (<CommentComponent key={comment.id} comment={comment} />))
            }

        </div>
    );
};

export default CommentsComponent;
