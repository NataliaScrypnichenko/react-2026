import type {IProduct} from "./IProduct.ts";

export interface IResponseProduct {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
};

