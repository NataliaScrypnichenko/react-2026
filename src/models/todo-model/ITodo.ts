import type {TodosModel} from "./TodosModel.ts";

export interface ITodo{
    "todos":TodosModel[],
    "total": number
    "skip": number,
    "limit": number
}
