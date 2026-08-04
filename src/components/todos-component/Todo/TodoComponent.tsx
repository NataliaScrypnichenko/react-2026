import type {FC} from "react";
import type {TodosModel} from "../../../models/todo-model/TodosModel.ts";
import './TodoComponent.css'

type TodosType ={
    todo:TodosModel
}

const TodoComponent:FC<TodosType> = ({todo}) => {
    return (
        <div >
            <div className="div_todo">
                <h1>{todo.id}{'-'} {todo.userId}{'-'}{todo.completed.toString()}</h1>
                <p>{todo.todo}</p>
            </div>

        </div>
    );
};

export default TodoComponent;
