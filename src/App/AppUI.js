import React from 'react';
import { TodoCounter } from '../TodoCounter'; //specify which object is exporting using the {}
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

import {TodoLoading} from '../TodoLoading';
import {TodoError} from '../TodoError';
import {TodoEmpty} from '../TodoEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoSwitch } from '../TodoSwitch';

import {Modal} from '../Modal';
function AppUI(){

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    isModalOpen,
    setIsModalOpen,
    openModal
    } = React.useContext(TodoContext)

    return (
    
        <React.Fragment>
          <TodoSwitch/>
          <div id='container'>
          <img src="Eximware-logo-lo.jpg" alt="TODO List Logo" className="header-image"/> 
          <h1>TODO</h1>
          <TodoSearch/>
          <TodoList>
              {loading && <><TodoLoading/><TodoLoading/><TodoLoading/></>}
              {error && <TodoError/>}
              {(!loading && searchedTodos.length===0) && <TodoEmpty/>}
              {searchedTodos.map(todo =>(
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                  )
                )}
          </TodoList>
          <TodoCounter/>
          <CreateTodoButton onClick={openModal}/>
          {isModalOpen && (
          <Modal>
          </Modal>
        )}
        
        </div>
        </React.Fragment>
      );
}

export {AppUI};