// Імпортую PostsComponent, який відповідає за отримання
// та відображення списку постів із Redux Store.
import PostsComponent from "../components/posts/PostsComponent.tsx";

// Створюю функціональний компонент PostsPage.
// PostsPage — це компонент сторінки, який відповідає за відображення постів. Він підключає PostsComponent,
// який отримує дані зі спільного Redux Store та передає кожен пост компоненту PostComponent для відображення.
const PostsPage = () => {

    // Повертаю розмітку сторінки.
    return (
        <div>
            {/* Додаю горизонтальну лінію для візуального розділення сторінки. */}
            <hr/>

            {/* Підключаю PostsComponent, який відображає список постів. */}
            <PostsComponent/>
        </div>
    );
};

// Експортую компонент, щоб його можна було підключити до маршрутизації.
export default PostsPage;
