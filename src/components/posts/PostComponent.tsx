import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";


type PostTypeProps = {
    item:IPost
};

const PostComponent:FC<PostTypeProps> = ({item}) => {
    return (
        <div>

                <div>{item.id}</div>
                <p>{item.title}</p>

        </div>
    );
};

export default PostComponent;
