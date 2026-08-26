import type {IUserResponseModel} from "../model/IUserResponseModel.ts";
import type {ICartsResponseModel} from "../model/ICartsResponseModel.ts";


const baseUrl=import.meta.env.VITE_BASE_URL;

export const userService={
    getAllUsers:async():Promise<IUserResponseModel> =>{
      return  await fetch(baseUrl+"/users")
          .then(res => res.json())
}
};

export const cartService={
    getAllCarts:async(id:number):Promise<ICartsResponseModel> =>{
        return await fetch(baseUrl+'/carts/user/'+ id)
            .then(res => res.json())
    }
}
