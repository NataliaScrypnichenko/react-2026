
import type {TodoModel} from "../../../models/todo-model/TodoModel.ts";
import {getTodos} from "../../../services/api.services.ts";
import TodoComponent from "../Todo/TodoComponent.tsx";
import {useEffect, useState} from "react";


const TodosComponent = () => {
   const [todos,setTodos]=useState<TodoModel[]>([]);

   useEffect(()=>{
            getTodos()
           .then(response => setTodos(response));

   },[])

    return (
        <div>
            {
                todos.map((todo)=>(<TodoComponent todo={todo} key={todo.id}/>))
            }
        </div>
    );
};

export default TodosComponent;
