import type {FC} from "react";
import type {IPost} from "../../model/IPost.ts";
import "./PostComponent.css"

// Створюю тип PostsPropsType, який описує властивості (props), що отримує компонент
type PostsPropsType = {
    post: IPost;// post — об'єкт поста типу IPost
};

//створюю PostComponent для виведення даних
const PostComponent:FC<PostsPropsType> = ({post}) => {
    return (
        <div>
            <div className="post-card">
                <p>userId: {post.userId}</p>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
            </div>
        </div>
    );
};

export default PostComponent;
