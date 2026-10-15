import UserComponent from "./UserComponent.tsx";
import {useCallback,  useMemo, } from "react";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponent = () => {

    console.log('users');
// є свій хук який капсулюєдві інші дії
    const users = useFetch();

    const arr:number[]=useMemo(() => {
        return [11,22,33];
    },[]);

    const foo= useCallback(()=>{
        console.log('test');
    },[]);



    return (
        <div>
            {
                users.map(value=><UserComponent foo={foo} arr={arr} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;
