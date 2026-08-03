import type {FC} from "react";
import type {TodoModel} from "../../../models/todo-model/TodoModel.ts";

type TodosType ={
    todo:TodoModel
}

const TodoComponent:FC<TodosType> = ({todo}) => {
    return (
        <div>
            <h1>{todo.skip}{todo.limit}</h1>
            <p>{todo.total}</p>
        </div>
    );
};

export default TodoComponent;
