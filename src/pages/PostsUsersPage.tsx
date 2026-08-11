import PostsUsersComponent from "../components/users/PostsUsersComponent.tsx";
import {useParams} from "react-router-dom";


const PostsUsersPage = () => {
    //витягує айди ,завжди присилає стрінги потрібно конвертнути в число +userId а також може прислати андифайн
    // то потрібно робити перевірку через іф
    const {userId} = useParams();
    // console.log(userId);


    return (
        <div>
            { userId && <PostsUsersComponent userId={userId} key={userId} />}
        </div>
    );
};

export default PostsUsersPage;
