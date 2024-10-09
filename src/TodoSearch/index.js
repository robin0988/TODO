import React from "react";

import { TodoContext } from "../TodoContext";
import {TodoPlaceHolder} from "../TodoPlaceHolder"
import { useTranslation } from "react-i18next";

function TodoSearch(){
  const {searchValue,
    setSearchValue,
    t} = React.useContext(TodoContext)

    
    return(
     <input id="new-todo-input" 
        placeholder={t('searchHolderMessage')} 
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
