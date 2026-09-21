import type {IProduct} from "./IProduct.ts";
//це та повна модель яку дає сервак коли запитуєм провукти, і приходить об'єк а не масив
export type IProductsResponseModelType= {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
