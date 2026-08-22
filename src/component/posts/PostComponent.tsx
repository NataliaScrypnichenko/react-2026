import type {FC} from "react";
import type {IPosts} from "../../model/IPosts.ts";


type TypePropsPosts = {
    post: IPosts;
}

const PostComponent:FC<TypePropsPosts> = ({post}) => {
    return (
        <div>
            <div>
                <h1>{post.id}= {post.userId}</h1>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostComponent;
