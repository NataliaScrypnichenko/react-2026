import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import PostComponent from "./PostComponent.tsx";

// створюю PostsComponent який відповідає за отримання та відображення списку постів.
const PostsComponent = () => {
    // За допомогою useAppSelector отримую масив постів із store.
    const posts = useAppSelector(state => state.postsStoreSlice.posts);

    // За допомогою useAppDispatch отримую функцію dispatch=яка дозволяє запускати дії Redux
    const dispatch = useAppDispatch();

    // useEffect виконує код після першого монтування компонента.
    useEffect(() => {
        // Відправляю асинхронну дію loadPost,яка запускає запит до сервера для отримання списку постів.
        // після успішного запиту дані записуються в store то
        dispatch(postSliceActions.loadPost());

    },[]);

    return (
        <div>
            {/* Перебираю масив користувачів методом map то для кожного поста створюю компонент PostComponent.*/}

            {posts.map((post) => <PostComponent post={post} key={post.id} />)}
        </div>
    );
};

export default PostsComponent;
