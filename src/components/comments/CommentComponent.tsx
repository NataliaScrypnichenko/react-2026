// Імпортую тип FC з React для типізації функціонального компонента.
import type {FC} from "react";

// Імпортую інтерфейс IComment, який описує структуру одного коментаря.
import type {IComment} from "../../model/IComment.ts";

// Підключаю CSS-файл для оформлення компонента.
import "./CommentComponent.css"

// Створюю тип CommentsPropsType, який описує властивості (props),
// що компонент отримує від батьківського компонента.
type CommentsPropsType = {
    // comment — об'єкт одного коментаря, структура якого описана інтерфейсом IComment.
    comment: IComment;
};

// Створюю функціональний компонент CommentComponent де є
// FC — тип React для функціонального компонента.
// CommentsPropsType — тип, який описує властивості, що компонент повинен отримати.
// FC<CommentsPropsType> Разом вони повідомляють TypeScript, що компонент приймає comment із типом IComment.
// За допомогою деструктуризації ({comment}) Компонент отримує об'єкт props, а з нього дістає властивість comment
const CommentComponent: FC<CommentsPropsType> = ({comment}) => {

    // Повертаю розмітку для відображення інформації про один коментар.
    return (
        <div>

            {/* // Створюю div із класом для оформлення картки користувача за допомогою CSS. */}
            <div className="comment-card">

                {/* Виводжу ID поста, до якого належить цей коментар. */}
                <p>{comment.postId}</p>

                {/* Виводжу ім'я та електронну адресу автора коментаря. */}
                <p>{comment.name}/{comment.email}</p>

                {/* Виводжу текст коментаря. */}
                <p>{comment.body}</p>

            </div>
        </div>
    );
};

// Експортую компонент, щоб використовувати його в інших файлах.
export default CommentComponent;
