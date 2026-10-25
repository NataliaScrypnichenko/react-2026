import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";


const UserPage = () => {
    // дістаємо id
    const {id} = useParams();
    // дістаємо user
    const {user,loadState} = useAppSelector(({userSlice}) => userSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
       // робим перевірку
        if (id) dispatch(userSliceActions.loadUser(id))

    }, [id]);//Слідкує за id не обов'язково але потейційно

    return (
        <div>
             {/*перевірка якщо не існує*/}
            { !loadState && <div>Loading...</div>}
            {/*робим перевірку юзера якщо існує то будуєм структуру*/}
            {user && <div>{user.id}: {user.name}</div>}
        </div>
    );
};

export default UserPage;
