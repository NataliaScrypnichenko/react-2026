import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {commentsSliceActions} from "../../redux/slices/commentSlice.ts";
import type {IUser} from "../../model/IUser.ts";
import type {IPost} from "../../model/IPost.ts";
import type {IComment} from "../../model/IComment.ts";


const ComplexComponent = () => {

    const {userStoreSlice:{users},postStoreSlice:{posts}, commentStoreSlice:{comments}} = useAppSelector(state => state);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUsers())
        }
        if (!posts.length){
            dispatch(postSliceActions.loadPosts())
        }
        if (!comments.length){
            dispatch(commentsSliceActions.loadComments())
        }
    }, []);

    return (
        <div>
            {users.map((user:IUser)=>(<div key={user.id}>{user.name}</div>))}
            {posts.map((post:IPost)=>(<div key={post.id}>{post.title}</div>))}
            {comments.map((comment:IComment)=>(<div key={comment.id}>{comment.name}</div>))}
        </div>
    );
};

export default ComplexComponent;
