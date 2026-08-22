export interface ICart {
	id: number;
	products: Products[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
export interface Products {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedTotal: number;
	thumbnail: string;
}
