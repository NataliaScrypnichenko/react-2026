import type {ProductModel} from "../models/ProductModel.ts";


const findProductUrl=import.meta.env.VITE_API_BASE_URL

const getProduct=async (): Promise<ProductModel[]> => {
    const response = await fetch(findProductUrl)
        .then(response => response.json())

    return response.product;
}

export {
    getProduct
}
