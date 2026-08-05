import {useEffect, useState} from "react";
import type {CommentsModel} from "../../../models/comments-model/CommentsModel.ts";
import {getComments} from "../../../services/api.services.ts";
import CommentComponent from "../comment/CommentComponent.tsx";


const CommentsComponent = () => {

    const [comments, setComments] = useState<CommentsModel[]>([]);

    useEffect(() => {
        getComments()
        .then(value => setComments(value));
    },[])


    return (
        <div>
            {
                comments.map((comment)=>(<CommentComponent comment={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default CommentsComponent;
