import React from "react";


function TodoLoading(){
      return(
        <li className='loading'>
        <input type="checkbox" className="loading" />
        <p className="todo-text-loading">Loading</p>
       </li>
      );
    } 
  
    export {TodoLoading};