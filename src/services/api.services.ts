import type {TodosModel} from "../models/todo-model/TodosModel.ts";
import type {ITodo} from "../models/todo-model/ITodo.ts";


const findTodosUrl=import.meta.env.VITE_API_BASE_URL+'/todos'

const getTodos=async ():Promise<TodosModel[]>=>{
   const response:ITodo= await fetch(findTodosUrl)
    .then(value => value.json())

    return response.todos
};


export {getTodos}
