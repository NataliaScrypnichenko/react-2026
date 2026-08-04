import {getTodos} from "../../../services/api.services.ts";
import TodoComponent from "../Todo/TodoComponent.tsx";
import {useEffect, useState} from "react";
import type {TodosModel} from "../../../models/todo-model/TodosModel.ts";


const TodosComponent = () => {
   const [todos,setTodos]=useState<TodosModel[]>([]);

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
