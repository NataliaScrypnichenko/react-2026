import {useEffect, useState} from "react";



const UsersJsonplaceholder = () => {

    const [users,setUsers] = useState([]);
 console.log(users);
    useEffect(() => {
        fetch(" https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
            .then(users => setUsers(users));

    },[])

    return (
        <div>
            </div>
    );
};

export default UsersJsonplaceholder;


