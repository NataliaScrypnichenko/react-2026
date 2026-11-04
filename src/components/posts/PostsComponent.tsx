// Імпортую власний типізований хук useAppSelector,
// який дозволяє отримувати дані зі спільного Redux Store.
import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";

// Імпортую хук useEffect для виконання дій після монтування компонента.
import {useEffect} from "react";

// Імпортую власний типізований хук useAppDispatch,
// який дозволяє відправляти Redux actions та запускати асинхронні дії.
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";

// Імпортую postSliceActions, у якому знаходиться асинхронна дія loadPost.
import {postSliceActions} from "../../redux/slices/postSlice.ts";

// Імпортую компонент PostComponent для відображення одного поста.
import PostComponent from "./PostComponent.tsx";

// Підключаю CSS-файл для оформлення списку постів.
import "./PostsComponent.css"


// Створюю PostsComponent, який відповідає за отримання
// та відображення списку постів.
const PostsComponent = () => {

    // За допомогою useAppSelector отримую масив постів із Redux Store.
    //state — увесь стан сховища.
    // postsStoreSlice — частина загального стану, яка відповідає за пости.
    // posts — масив постів, що зберігається всередині цього Slice.
    const posts = useAppSelector(state => state.postsStoreSlice.posts);

    // За допомогою useAppDispatch отримую функцію dispatch,
    // Вона дозволяє відправляти звичайні та асинхронні дії до Redux Store тобто асинхронну дію loadPost()
    const dispatch = useAppDispatch();

    // useEffect виконує побічні дії після монтування компонента.
    // Порожній масив залежностей означає, що ефект запускається
    // після першого монтування компонента.
    useEffect(() => {

        // Відправляю асинхронну дію loadPost.
        // Вона запускає запит до сервера для отримання списку постів.
        // Після успішного отримання даних спрацьовує fulfilled,
        // а редюсер postSlice записує отриманих користувачів у Store
        dispatch(postSliceActions.loadPost());

    }, []);

    // Повертаю розмітку для відображення списку постів.
    return (
        // Створюю div-контейнер із класом posts-container для оформлення списку постів
        <div className="posts-container">

            {
                // Перебираю масив постів методом map.
                // Для кожного поста створюю окремий компонент PostComponent.
                //post — один пост із масиву.post={post} — передаємо цей пост дочірньому компоненту.
                //key={post.id} — унікальний ключ, який допомагає React відстежувати елементи списку.
                posts.map((post) => (
                    <PostComponent post={post} key={post.id} />
                ))
            }

        </div>
    );
};

// Експортую компонент, щоб використовувати його в інших файлах.
export default PostsComponent;
