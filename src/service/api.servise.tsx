import type {IResponseProduct} from "../model/IResponseProduct.ts";

const url="https://dummyjson.com";

export const getProducts =async (page:string):Promise<IResponseProduct> =>{
    const limit=30;
    const skip= limit * (+page) - limit;
    const answer= await fetch(url+'/products'+'?skip='+skip)
       .then(response => response.json())
    return answer;
};
