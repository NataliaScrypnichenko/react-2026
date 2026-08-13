import {useEffect, useState} from "react";
import UserDummy from "./UserDummy.tsx";
import type {IUserDummy} from "../../models/IUserDummy.ts";


const UsersDummy = () => {

    const [data, setData] = useState<IUserDummy | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => setData(data));
    },[])


    return (
        <div>
            {
                data?.users.map((item) => (<UserDummy key={item.id} item={item} />))
            }
        </div>
    );
};

export default UsersDummy;
