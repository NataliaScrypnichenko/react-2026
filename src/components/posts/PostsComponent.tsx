    import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
    import { postSliceActions} from "../../redux/slices/postSlice.ts";
    import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
    import {useEffect} from "react";
    import PostComponents from "./PostComponents.tsx";


    const PostsComponent = () => {

        const posts = useAppSelector(state => state.postStoreSlice.posts);

        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(postSliceActions.loadPosts())
        }, []);

        return (
            <div>
                {
                    posts.map(post=><PostComponents key = {post.id} post={post}/>)
                }
            </div>
        );
    };

    export default PostsComponent;
