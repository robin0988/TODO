import React, {useState}  from "react";
import {useLocalStorage} from "./useLocalStorage"

const TodoContext = React.createContext();

function TodoProvider({children}){

    const { item : todos, 
        saveItem : saveTodos,
        loading,
        error,} = useLocalStorage('EWTODO_V1',[]);
const [searchValue, setSearchValue] = React.useState('');

const completedTodos = todos.filter(todo => todo.completed).length;
const totalTodos = todos.length;
console.log("y esto "+todos.text);
const searchedTodos = todos.filter(
  todos => {
    const todoText=todos.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return  todoText.includes(searchText)}
)

const completeTodo = (text)=>{
  const newTodos=[...todos];
  const todoIndex =newTodos.findIndex(
    (todo) => todo.text == text
  )
  newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
  saveTodos(newTodos);
}

const deleteTodo = (text)=>{
  const newTodos=[...todos];
  const todoIndex =newTodos.findIndex(
    (todo) => todo.text == text
  )
  newTodos.splice(todoIndex,1);
  saveTodos(newTodos);
}
    
  // Estado para el modal y el nuevo TODO
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewTodo(''); // Limpiar el input
  };

  // Función para guardar el nuevo TODO
  const saveTodo = () => {
    const newTodos=[...todos];
    if (newTodo.trim()) {
        newTodos.push({
          text:newTodo,
          completed:false  
        })
    console.log('Nueva tarea:', newTodo);
    saveTodos(newTodos);
    }
   
    closeModal();
  };
 

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,  
            searchedTodos,
            completedTodos,
            totalTodos,
            completeTodo,
            deleteTodo,
            openModal,
            isModalOpen,
            setIsModalOpen,
            newTodo,
            setNewTodo,
            saveTodo,
            closeModal
        }}>
            {children}
        </TodoContext.Provider>
        
    );
}

export{TodoContext, TodoProvider}