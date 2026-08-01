import type {FC} from "react";
import type {ITodo} from "../../models/ITodos.ts";

type TodoPropType = {
    item:ITodo;
};

const TodoComponent: FC<TodoPropType> = ({item}:TodoPropType) => {


    return (
        <div>
            {
               <div>
                   <h1>{item.userId}</h1>
                   <p>{item.id} {'='} {item.title} {item.completed.toString()}</p>
               </div>
            }
        </div>
    );
};

export default TodoComponent;
