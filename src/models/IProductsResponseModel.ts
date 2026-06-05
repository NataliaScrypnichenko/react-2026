import type {IProduct} from "./IProduct.ts";

export interface IProductsResponseModel {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
