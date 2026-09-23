import type {IProduct} from "./IProduct.ts";

export type IBaseResponseModelType = {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
