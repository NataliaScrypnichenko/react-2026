import CommentsComponent from "../components/comments/CommentsComponent.tsx";

// вивожу дані на сторінку CommentsPage яка відповідає за коментарі
const CommentsPage = () => {
    return (
        <div>
            <hr/>
           <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;
