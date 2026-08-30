import type {IQueryResponseUser} from "../model/IQueryResponseUser.ts";


export const getAllUsers =async (page:string):Promise<IQueryResponseUser>=> {
     const limit =30;
     const skip = limit * (+page)-limit;
     return  await fetch('https://dummyjson.com/users?skip='+skip)
                  .then(res => res.json())
}
