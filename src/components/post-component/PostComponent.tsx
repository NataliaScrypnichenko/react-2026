import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import './PostComponent.css'

type PostPropType = {
    item:IPost
};

const PostComponent:FC<PostPropType> = ({item}:PostPropType) => {

    return (
        <div>
            {
               <div className={'post_div'}>
                   <h1 className={'post_h1'}>{item.userId} {'--'} {item.id}</h1>
                   <p className={'post_p1'}>{item.title}</p>
                   <p className={'post_p2'}>{item.body}</p>
               </div>
            }
        </div>
    );
};

export default PostComponent;
