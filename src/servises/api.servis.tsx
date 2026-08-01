import type {ITodo} from "../models/ITodos.ts";

const baseUrl=import.meta.env.VITE_API_URL

export const getTodos = async ():Promise<ITodo[]> => {

   const todos=await fetch(baseUrl)
        .then(value =>value.json())

    return todos
};

