// Імпортую CommentsComponent, який відповідає за отримання та відображення списку коментарів із Redux Store.
import CommentsComponent from "../components/comments/CommentsComponent.tsx";

// Створюю функціональний компонент CommentsPage, який відповідає за відображення сторінки з коментарями.
const CommentsPage = () => {

    // Повертаю розмітку сторінки.
    return (
        <div>
            {/* Додаю горизонтальну лінію для візуального розділення сторінки. */}
            <hr/>

            {/* Підключаю CommentsComponent, який відображає список коментарів. */}
            <CommentsComponent/>
        </div>
    );
};

// Експортую компонент, щоб його можна було підключити до маршрутизації.
export default CommentsPage;
