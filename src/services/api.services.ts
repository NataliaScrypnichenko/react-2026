import type {TodosModel} from "../models/todo-model/TodosModel.ts";
import type {ITodo} from "../models/todo-model/ITodo.ts";
import type {IPost} from "../models/posts-model/IPost.ts";
import type {PostsModel} from "../models/posts-model/PostsModel.ts";
import type {IComment} from "../models/comments-model/IComment.ts";
import type {CommentsModel} from "../models/comments-model/CommentsModel.ts";

const findTodosUrl=import.meta.env.VITE_API_BASE_URL+'/todos';
const findPostsUrl=import.meta.env.VITE_API_BASE_URL+'/posts';
const findCommentsUrl=import.meta.env.VITE_API_BASE_URL+'/comments';

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

 const getComments=async ():Promise<CommentsModel[]>=>{
     const response:IComment= await fetch(findCommentsUrl)
          .then(value => value.json());
           return response.comments;

 }


export {getTodos, getPosts, getComments};
