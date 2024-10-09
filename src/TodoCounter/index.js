import react from "react";
import { TodoContext } from "../TodoContext";
import { Trans } from "react-i18next";

function TodoCounter(){
    const {completedTodos,totalTodos} = react.useContext(TodoContext)
    return(

     <p className="todo-count">
      {<Trans i18nKey="completedMessage" >Have completed  </Trans>} 
      <span>{completedTodos}</span>
      {<Trans i18nKey="ofMessage" > of </Trans>} 
      <span>{totalTodos}</span>
      {<Trans i18nKey="todoMessage" ><span>TODO</span></Trans>} 
      </p>
    );
  } 

  export { TodoCounter };