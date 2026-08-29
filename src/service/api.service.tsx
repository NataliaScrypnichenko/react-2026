import type {IQueryResponseUser} from "../model/IQueryResponseUser.ts";


export const getAllUsers =async (page:string):Promise<IQueryResponseUser>=> {
     return  await fetch('https://dummyjson.com/users?limit='+page)
.then(res => res.json())
}
