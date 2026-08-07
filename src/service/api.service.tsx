
import type {IProducts} from "../models/IProducts.ts";


const findProductUrl=import.meta.env.VITE_API_BASE_URL+'/products'

const getProduct=async (): Promise<IProducts[]> => {
    const response = await fetch(findProductUrl)
        .then(response => response.json())

    return response.products;
}

export {
    getProduct
}
