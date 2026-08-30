import type {IQueryResponseUser} from "../model/IQueryResponseUser.ts";

const url='https://dummyjson.com';

export const getAllUsers =async (page:string):Promise<IQueryResponseUser>=> {
     const limit =30;
     const skip= limit * (+page)-limit;
     return  await fetch(url +"/users"+"?skip="+skip)
                  .then(res => res.json())
};


// export const getAllUsers =async (page:string):Promise<IQueryResponseUser>=> {
//      let skip=0;
//      const limit =30;
//      if (+page>0){
//           skip= limit * (+page)-limit;
//
//      }
//
//      return  await fetch(url +"/users"+"?skip="+skip)
//          .then(res => res.json())
// };
