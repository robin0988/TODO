import react from "react";

function TodoList({ children }){
    return(
     <ul id="todo-list">
            {children}
     </ul>
    );
  } 

  export {TodoList};