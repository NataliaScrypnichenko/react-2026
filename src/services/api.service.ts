import type {IUser} from "../moduls/IUser.ts";

 const getUsers = async ():Promise<IUser[]> => {
     const users= await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    return users;
}
export {getUsers}



 const getUser = async (id:string) :Promise<IUser>=> {
     // const user= await fetch('https://jsonplaceholder.typicode.com/users'+id)
     //     .then(value => value.json())
     // return user;

     return  await fetch('https://jsonplaceholder.typicode.com/users'+id)
         .then(value => value.json());
 }

export {getUser}
