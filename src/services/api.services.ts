import type {TodosModel} from "../models/todo-model/TodosModel.ts";
import type {ITodo} from "../models/todo-model/ITodo.ts";
import type {IPost} from "../models/posts-model/IPost.ts";
import type {PostsModel} from "../models/posts-model/PostsModel.ts";


const findTodosUrl=import.meta.env.VITE_API_BASE_URL+'/todos';
const findPostsUrl=import.meta.env.VITE_API_BASE_URL+'/posts';


const getTodos=async ():Promise<TodosModel[]>=>{
   const response:ITodo= await fetch(findTodosUrl)
    .then(value => value.json());

    return response.todos;
};

const getPosts=async ():Promise<PostsModel[]>=>{
    const response:IPost =await fetch(findPostsUrl)
        .then(value => value.json());

    return response.posts;
};


export {getTodos, getPosts};
