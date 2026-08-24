import type {ICart} from "./ICart.ts";

export interface ICartsResponseModel {
	carts: ICart[];
	total: number;
	skip: number;
	limit: number;
}
