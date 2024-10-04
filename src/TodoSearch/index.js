import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch(){
  const {searchValue,
    setSearchValue} = React.useContext(TodoContext)
    return(
     <input id="new-todo-input" 
        placeholder="Filter todo task..."
        value={searchValue}
        onChange={(event) =>  {
          setSearchValue(event.target.value)
        }}
      />
    );
  } 

  export {TodoSearch};

  /*State is consumed and update and inmutable
    States must be in parent component not in child one
  */
