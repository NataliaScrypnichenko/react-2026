import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import UserComponent from "./UserComponent.tsx";




const UsersComponent = () => {

     const users = useAppSelector(state => state.userStoreSlice.users);

     const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {
               users.map((user) => (<UserComponent user={user}  key={user.id}/>))
            }
        </div>
    );
};

export default UsersComponent;
