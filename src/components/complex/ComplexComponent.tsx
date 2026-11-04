// Імпортую власний типізований хук useAppSelector,
// який дозволяє отримувати дані зі спільного Redux Store.
import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";

// Імпортую власний типізований хук useAppDispatch,
// який дозволяє відправляти дії до Redux Store.
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";

// Імпортую хук useEffect для виконання побічних дій після монтування компонента.
import {useEffect} from "react";

// Імпортую postSliceActions, у якому знаходиться асинхронна дія loadPost
// для отримання списку постів із сервера.
import {postSliceActions} from "../../redux/slices/postSlice.ts";

// Імпортую userSliceActions, у якому знаходиться асинхронна дія loadUsers
// для отримання списку користувачів із сервера.
import {userSliceActions} from "../../redux/slices/userSlice.ts";

// Імпортую commentSliceActions, у якому знаходиться асинхронна дія loadComment
// для отримання списку коментарів із сервера.
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";

// Імпортую інтерфейс IUser, який описує структуру об'єкта користувача.
import type {IUser} from "../../model/IUser.ts";

// Імпортую інтерфейс IPost, який описує структуру об'єкта поста.
import type {IPost} from "../../model/IPost.ts";

// Імпортую інтерфейс IComment, який описує структуру об'єкта коментаря.
import type {IComment} from "../../model/IComment.ts";

// Підключаю CSS-файл для оформлення компонента.
import './ComplexComponent.css'


// Створюю ComplexComponent, який відображає користувачів,їхні пости та коментарі до кожного поста.
const ComplexComponent = () => {

    // За допомогою useAppSelector отримую дані з усіх трьох частин Redux Store.
    // usersStoreSlice — частина стану, у якій зберігаються користувачі.
    // postsStoreSlice — частина стану, у якій зберігаються пости.
    // commentsStoreSlice — частина стану, у якій зберігаються коментарі.
    // За допомогою деструктуризації отримую масиви users, posts та comments
    // безпосередньо з відповідних частин загального стану.
    const {
        usersStoreSlice: {users},
        postsStoreSlice: {posts},
        commentsStoreSlice: {comments}
    } = useAppSelector(state => state);

    // За допомогою useAppDispatch отримую функцію dispatch,яка дозволяє запускати дії Redux, зокрема асинхронне завантаження даних.
    const dispatch = useAppDispatch();

    // useEffect виконує побічні дії після монтування компонента.
    // Перевіряю, чи є дані в кожному масиві Redux Store.
    // Якщо відповідний масив порожній, запускаю завантаження даних із сервера.
    useEffect(() => {

        // Перевіряю, чи масив users порожній.Якщо користувачів ще немає в store, запускаю асинхронну дію loadUsers().
        if (!users.length) {
            dispatch(userSliceActions.loadUsers());
        }

        // Перевіряю, чи масив posts порожній.Якщо постів ще немає в store, запускаю асинхронну дію loadPost().
        if (!posts.length) {
            dispatch(postSliceActions.loadPost());
        }

        // Перевіряю, чи масив comments порожній.Якщо коментарів ще немає в store, запускаю асинхронну дію loadComment().
        if (!comments.length) {
            dispatch(commentSliceActions.loadComment());
        }

    }, []);

    // Повертаю розмітку для відображення користувачів,їхніх постів та коментарів до цих постів.
    return (
        <div className="complex-container">

            {/* Заголовок сторінки, на якій відображаються користувачі, пости та коментарі. */}
            <h1 className="complex-title">Users, Posts and Comments</h1>

            {// Метод map перебирає масив користувачів.Для кожного користувача створюю окремий блок із його інформацією.
                // user:IUser вказує TypeScript, що змінна user має тип IUser.
                users.map((user: IUser) => (

                    // Створюю блок одного користувача.key={user.id} — унікальний ключ,
                    // який допомагає React розрізняти елементи під час відображення списку.
                    <div className="user-card" key={user.id}>

                        {/* Відображаю ім'я поточного користувача. */}
                        <h2>User: {user.name}</h2>

                        {/* Відображаю електронну адресу поточного користувача. */}
                        <p>{user.email}</p>

                        {
                            // post. Метод filter перебирає масив усіх постів і залишає тільки ті, які належать поточному користувачу.
                            // post.userId — ID користувача, який створив пост.
                            // user.id — ID користувача, якого зараз перебирає зовнішній map.
                            // Якщо ці значення однакові, пост належить цьому користувачу.
                            // Після фільтрації метод map перебирає знайдені пости та створює окремий блок для кожного поста.
                            posts
                                .filter((post: IPost) => post.userId === user.id)
                                .map((post: IPost) => (

                                    // Створюю блок post-card одного поста поточного користувача.
                                    // key={post.id} — унікальний ключ для кожного поста.
                                    <div className="post-card" key={post.id}>

                                        {/* Відображаю заголовок поточного поста. */}
                                        <h3>Post: {post.title}</h3>

                                        {/* Відображаю текст поточного поста. */}
                                        <p>{post.body}</p>

                                        {
                                            //comments. Метод filter перебирає масив усіх коментарів і залишає тільки коментарі до поточного поста.
                                            // comment.postId — ID поста, до якого належить коментар.
                                            // post.id — ID поста, який зараз перебирає другий map.
                                            // Якщо ці значення однакові, коментар належить цьому посту.то бто він перевіряє всі пости та залишає тільки ті,
                                            // у яких post.userId дорівнює user.id.
                                            // Після фільтрації метод map перебирає вже відфільтровані пости та створює для кожного HTML-блок.
                                            comments
                                                .filter((comment: IComment) => comment.postId === post.id)
                                                .map((comment: IComment) => (

                                                    // Створюю блок comment-card одного коментаря до поточного поста.
                                                    // key={comment.id} — унікальний ключ для кожного коментаря.
                                                    <div className="comment-card" key={comment.id}>

                                                        {/* Відображаю ім'я або назву коментаря. */}
                                                        <h4>Comment: {comment.name}</h4>

                                                        {/* Відображаю електронну адресу автора коментаря. */}
                                                        <p>Email: {comment.email}</p>

                                                        {/* Відображаю текст коментаря. */}
                                                        <p>{comment.body}</p>

                                                    </div>
                                                ))
                                        }

                                    </div>
                                ))
                        }

                    </div>
                ))
            }

        </div>
    );
};

// Експортую компонент, щоб використовувати його в інших файлах.
export default ComplexComponent;
