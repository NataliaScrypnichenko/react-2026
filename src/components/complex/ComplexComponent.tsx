import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";
import type {IUser} from "../../model/IUser.ts";
import type {IPost} from "../../model/IPost.ts";
import type {IComment} from "../../model/IComment.ts";
import './ComplexComponent.css'

const ComplexComponent = () => {

    //отримаю дані на одну сторінку разом з різних слайсів які є в store
    const {usersStoreSlice:{users},postsStoreSlice:{posts},commentsStoreSlice:{comments}} =
        useAppSelector(state => state);

    //запускаю дії в Redux
    const dispatch = useAppDispatch();
//відправляю запит на сервер якщо дані вірні то вивожу іх
    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUsers());
        }
        if (!posts.length) {
        dispatch(postSliceActions.loadPost());
        }
        if (!comments.length) {
            dispatch(commentSliceActions.loadComment());
        }
    }, []);
     return (
        <div className="complex-container">
            <h1 className="complex-title">Users, Posts and Comments</h1>
            {users.map((user:IUser) => (
                <div className="user-card" key={user.id}>
                    <h2 >User: {user.name}</h2>
                    <p >{user.email}</p>
                    {posts.filter((post:IPost) => post.userId === user.id).map((post:IPost) => (
                        <div className="post-card" key={post.id}>
                            <h3>Post: {post.title}</h3>
                            <p>{post.body}</p>
                            {comments.filter((comment:IComment) => comment.postId === post.id)
                                .map((comment:IComment) => (
                                    <div className="comment-card" key={comment.id}>

                                        <h4>Comment: {comment.name}</h4>
                                        <p>Email: {comment.email}</p>
                                        <p>{comment.body}</p>

                                    </div>
                                ))}

                        </div>
                    ))}

                </div>
            ))}

        </div>
    );
};

export default ComplexComponent;
