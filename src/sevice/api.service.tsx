import type {IUserResponseModel} from "../model/IUserResponseModel.ts";
// import type {ICart} from "../model/ICart.ts";

const baseUrl=import.meta.env.VITE_BASE_URL;

export const userService={
    getAllUsers:async():Promise<IUserResponseModel> =>{
      return  await fetch(baseUrl+"/users")
          .then(res => res.json())
}
};

// export const cartService={
//     getAllCarts:async():Promise<ICart> =>{
//         return await fetch(baseUrl+'/carts/user/'+ userService.id)
//             .then(res => res.json())
//     }
// }
