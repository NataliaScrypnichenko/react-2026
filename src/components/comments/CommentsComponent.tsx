import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentsSliceActions} from "../../redux/slices/commentSlice.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {

    const comments =
        useAppSelector(state => state.commentStoreSlice.comments);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsSliceActions.loadComments())
    });

    return (
        <div>
            {
                comments.map((comment) => (<CommentComponent key={comment.id} comment={comment} />))
            }
        </div>
    );
};

export default CommentsComponent;
