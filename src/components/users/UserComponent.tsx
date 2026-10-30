import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/usersSlise/userSlice.ts";


//оформляю посилання user/id
const UserComponent = () => {
    const {id} = useParams();

    const {user,loadState} = useAppSelector(({userSlice}) => userSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {

        if (id)dispatch(userSliceActions.loadUser(id))

    },[id])
    return (
        <div>
            {/*Перевіряє якщо існує то */}
            { !loadState && <div>loading</div>}

            {
                user && <div>{user.id} :{user.name}</div>
            }
        </div>
    );
};

export default UserComponent;
