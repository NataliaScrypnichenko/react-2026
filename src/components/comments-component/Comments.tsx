import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../service/api.service.tsx";
import Comment from "../comment-component/Comment.tsx";


const Comments = () => {

    const [comments,setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments()
        .then(value => setComments(value));
    },[]);


    return (
        <div>
            {
               comments.map((comment) =>(<Comment key={comment.id} comment={comment} />))
            }
        </div>
    );
};

export default Comments;
