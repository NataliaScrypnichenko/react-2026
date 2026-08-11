import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";


type PostTypeProps = {
    item:IPost
};

const PostComponent:FC<PostTypeProps> = ({item}) => {
    return (
        <div>
            {/*<h1>{item.userId}</h1>*/}
            <div>
                <p>id:{item.id}</p>
                <p>title: {item.title}</p>
                <p>Body:{item.body}</p>
            </div>


        </div>
    );
};

export default PostComponent;
