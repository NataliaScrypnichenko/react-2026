import {useAppSelector} from "../../redux/hook/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hook/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";
import CommentComponent from "./CommentComponent.tsx";

//CommentsComponent відповідає за отримання та відображення списку користувачів
const CommentsComponent = () => {
// За допомогою useAppSelector отримую масив коментарів із store
  const comments  =
      useAppSelector(state => state.commentsStoreSlice.comments);

// За допомогою useAppDispatch отримую функцію dispatch=яка дозволяє запускати дії Redux
  const dispatch = useAppDispatch();

// useEffect виконує код після першого відображення компонента
  useEffect(() => {
      // Відправляю асинхронну дію loadComment, яка запускає запит до сервера для отримання списку коментарів.
      // після успішного запиту дані записуються в store
      dispatch(commentSliceActions.loadComment());

  },[]);

    return (
        <div>
            {/*/ Перебираю масив коментрів методом map
                 то для кожного коментаря створюю компонент CommentComponent*/}
            {comments.map((comment) => (<CommentComponent key={comment.id} comment={comment} />))}
        </div>
    );
};

export default CommentsComponent;
