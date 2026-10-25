//після того як створили сховище то ідем на пейдж
// розложити по сервісу
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const UsersPage = () => {
    //відхоплюємо інформацію з сховища store, є хук   useSelector()-він приймає
    // об'єкт state-тобто це стейт нашого компонента але по факту це посилання на наше сховище на store
    // із цього стейта можем дестрикторезувати інформацію яка необхідна але він не знає який там тип лежить
    // і він там величизний тип лежить і коли будуть появлятися нові слайси то потрібно буде переробляти його
    // це можна вирішити створити власний хук- де можна зробити таку процедуру яка буде самостійно діставати я кі типи
    // даних зноходяться в сховищі useAppSelector і тепер заміняю useSelector() на useAppSelector
    //const stateType = useAppSelector(state => state);

    // const {userSlice} = useAppSelector(state => state);
    // useAppSelector(state => state.userSlice)
    // useAppSelector({userSlice} => userSlice)
    // const userSlice =useAppSelector(({userSlice}) => userSlice);
    // console.log(userSlice);//тобто ми змогли відхопити на іншій пейджі
    const {users, loadState} =useAppSelector(({userSlice}) => userSlice);
// можем визвати на пряму loadUsers
// ми типізуівали діспач
//     const dispatch = useDispatch();//це фя яка викликає інші ф-ї для того щоб вони виконались
 const dispatch = useAppDispatch();//він типізований і знатиме що
    // всередині лежить юзерслайс з його типізацією- відповідно все працюватиме стабільніше

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())//loadUsers() який викликаєм тут то це обгортка

    }, []);

    return (
        <div>
            { !loadState && <div>Loading...</div>}
            {
                users.map((user) => (<div key={user.id}>{user.name}</div>))
            //  щоб наповнити це то потрібно визвати функцію loadUsers
            }
        </div>
    );
};

export default UsersPage;
