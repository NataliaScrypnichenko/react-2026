// Імпортую власний типізований хук useAppSelector,
// який дозволяє отримувати дані зі спільного Redux Store.
import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";

// Імпортую власний типізований хук useAppDispatch,
// який дозволяє відправляти дії до Redux Store.
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";

// Імпортую хук useEffect для виконання побічних дій після монтування компонента.
import {useEffect} from "react";

// Імпортую commentSliceActions, у якому знаходиться асинхронна дія loadComment.
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";

// Імпортую компонент CommentComponent для відображення одного коментаря.
import CommentComponent from "./CommentComponent.tsx";

// Підключаю CSS-файл для оформлення списку коментарів.
import "./CommentsComponent.css"


// Створюю CommentsComponent, який відповідає за отримання
// та відображення списку коментарів.
const CommentsComponent = () => {

    // За допомогою useAppSelector отримую масив коментарів із Redux Store.
    //state — увесь стан Redux Store.
    // commentsStoreSlice — частина загального стану, яка відповідає за коментарі.
    // comments — масив коментарів, що зберігається всередині цієї частини стану.
    const comments =
        useAppSelector(state => state.commentsStoreSlice.comments);

    // За допомогою useAppDispatch отримую функцію dispatch,
    // яка дозволяє відправляти дії до Redux Store.
    const dispatch = useAppDispatch();

    // useEffect виконує побічні дії після монтування компонента.
    // Порожній масив залежностей означає, що ефект запускається
    // після першого монтування компонента.
    useEffect(() => {

        // Відправляю асинхронну дію loadComment.
        // Вона запускає запит до сервера для отримання списку коментарів.
        // Після успішного запиту отримані дані записуються в Redux Store
        // через відповідний reducer у commentSlice.
        dispatch(commentSliceActions.loadComment());

    }, []);

    // Повертаю розмітку для відображення списку коментарів.
    return (
        <>
            <div className="comments-container">

                {
                    // Перебираю масив коментарів методом map.
                    // Для кожного коментаря створюю окремий CommentComponent.
                    //comment — один коментар із масиву.
                    //comment={comment} — передає об'єкт коментаря через props.
                    // key={comment.id} — унікальний ключ для React.
                    comments.map((comment) => (
                        <CommentComponent key={comment.id} comment={comment}/>
                    ))
                }

            </div>
        </>
    );
};

// Експортую компонент, щоб використовувати його в інших файлах.
export default CommentsComponent;
