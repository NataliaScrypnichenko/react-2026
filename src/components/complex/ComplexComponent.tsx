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
            {users.map((user:IUser)=>(<div key={user.id}>{user.name}
                <h2>User: {user.name}</h2>
                <p>{user.email}</p>
                {posts.filter((post:IPost)=>post.userId === user.id).map((post:IPost)=>
                    (<div key={post.id}>
                        <h3>Post: {post.title}</h3>
                        <p>{post.body}</p>
                        {comments.filter((comment:IComment)=>comment.postId === post.id)
                            .map((comment:IComment)=>(<div key={comment.id}>
                                <h4>comment: {comment.name}</h4>
                                <p>email:{comment.email}</p>
                                <p>body:{comment.body}</p>
                            </div>))}
                    </div>))}
            </div>))}

        </div>
    );
};

export default ComplexComponent;
