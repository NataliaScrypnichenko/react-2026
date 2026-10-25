//після того як створили сховище то ідем на пейдж
// розложити по сервісу
import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const UsersPage = () => {
    //відхоплюємо інформацію з сховища store, є хук   useSelector()-він приймає
    // об'єкт state-тобто це стейт нашого компонента але по факту це посилання на наше сховище на store
    // із цього стейта можем дестрикторезувати інформацію яка необхідна але він не знає який там тип лежить
    // і він там величизний тип лежить і коли будуть появлятися нові слайси то потрібно буде переробляти його
    // це можна вирішити створити власний хук- де можна зробити таку процедуру яка буде самостійно діставати я кі типи
    // даних зноходяться в сховищі  створений хук useAppSelector і тепер заміняю useSelector() на useAppSelector
    //const stateType = useAppSelector(state => state);

    // const {userSlice} = useAppSelector(state => state);
    // useAppSelector(state => state.userSlice)
    // useAppSelector({userSlice} => userSlice)
    // const userSlice =useAppSelector(({userSlice}) => userSlice);
    // console.log(userSlice);//тобто ми змогли відхопити на іншій пейджі
    const {users} =useAppSelector(({userSlice}) => userSlice);
// можем визвати на пряму loadUsers
    const dispatch = useDispatch();//це фя яка викликає інші ф-ї для того щоб вони виконались


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
               // dispatch( userSlice.actions.loadUsers(value))- це можна записати по іншому
                //може давати помилки тому що нічого не типізовано
                // тобто тут це loadUsers є обгорткую для loadUsers функції з сховища і value це є з сховища-action
                dispatch(userSliceActions.loadUsers(value));
            })
    }, []);

    return (
        <div>
            {
                users.map((user) => (<div key={user.id}>{user.name}</div>))
            //  щоб наповнити це то потрібно визвати функцію loadUsers
            }
        </div>
    );
};

export default UsersPage;
