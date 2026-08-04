import type {FC} from "react";
import type {PostsModel} from "../../../models/posts-model/PostsModel.ts";
import './PostComponent.css'

type PostType = {
    post:PostsModel
}

const PostComponent:FC<PostType> = ({post}) => {
    return (
        <div>
            <div className={'div_post'}>
            <div >
                <h1>{post.id}</h1>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>{post.views}</p>
                <p>{post.reactions.likes}</p>
                <p>{post.reactions.dislikes}</p>
            </div>
            <div>
                {post.tags.map((tag, index) => (
                    <span key={index}>{tag.tags} </span>
                ))}
            </div>
            </div>
        </div>
    );
};

export default PostComponent;


