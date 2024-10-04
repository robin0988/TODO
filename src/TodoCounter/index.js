import react from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    const {completedTodos,totalTodos} = react.useContext(TodoContext)
    return(
     <p className="todo-count">
        Have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOs
    </p>
    );
  } 

  export { TodoCounter };