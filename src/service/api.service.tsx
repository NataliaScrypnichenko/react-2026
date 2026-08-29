import type {IResponseUser} from "../model/IResponseUser.ts";


export const getAllUsers=async (pg:string):Promise<IResponseUser>=>{
  return await  fetch('https://reqres.in/api/users?page='+pg)
              .then(res => res.json())
}
