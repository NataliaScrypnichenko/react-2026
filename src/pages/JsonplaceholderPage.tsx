import UsersJsonplaceholder from "../components/users/UsersJsonplaceholder.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";


const JsonplaceholderPage = () => {
    return (
        <div>
            <UsersJsonplaceholder/>
            <hr/>
            <CommentsComponent/>
        </div>
    );
};

export default JsonplaceholderPage;
