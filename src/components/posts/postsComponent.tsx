import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceAction} from "../../redux/slices/postSlice/postSlice.ts";

const PostsComponent = () => {
//дістаємо posts
    const {posts} = useAppSelector(({postSlice})=>postSlice);

     const dispatch = useAppDispatch();

     useEffect(() => {

        dispatch(postSliceAction.loadPosts())

     },[])


    return (
        <div>
            {
                posts.map((post) => {

                  return  <div key={post.id}>
                        {post.id}:
                        {post.userId}:
                        {post.title}
                        {post.body}
                  </div>
                })
            }
        </div>
    );
};

export default PostsComponent;
