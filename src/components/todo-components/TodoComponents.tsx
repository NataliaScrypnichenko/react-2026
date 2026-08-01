import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodos.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../servises/api.servis.tsx";

const TodoComponents = () => {
    const [todos,setTodos]=useState<ITodo[]>([]);

    useEffect(()=>{
            getTodos()
            .then(response => {
                setTodos(response)
            });

        return () => {}
    },[]);

    return (
        <div>
            {
               todos.map(todo=><TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;
