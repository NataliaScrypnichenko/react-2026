import type {ProductModel} from "./ProductModel.ts";

export interface IProducts {
	products: ProductModel[];
	total: number;
	skip: number;
	limit: number;
}
