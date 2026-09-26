import type {IProduct} from "./IProduct.ts";

// Модель описує повну відповідь API при отриманні продуктів.
//
// products — масив продуктів.
// total — загальна кількість продуктів.
// skip — скільки елементів було пропущено.
// limit — максимальна кількість елементів у відповіді.
export type IBaseResponseModelType = {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
};
