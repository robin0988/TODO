import react from "react";
import reactDom from "react-dom";
import { TodoContext } from "../TodoContext";

function Modal({children}){

    const {
      newTodo
      ,setNewTodo,
      saveTodo,
      closeModal,} = react.useContext(TodoContext)

    return reactDom.createPortal(
        
         <div className="modal-overlay">
            {children}
              <div className="modal">
                <h1>Add TODO</h1>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="create todo..."
                />
                <div className="modal-buttons">
                 <button onClick={saveTodo}>Save</button>
                <button onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </div>
         ,
         document.getElementById('modal-portal')
        
    );
}

export{Modal};
