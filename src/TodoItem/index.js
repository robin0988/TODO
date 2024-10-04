import {CompleteIcon} from '../CompleteIcon'; 
import {DeleteIcon} from '../DeleteIcon'; 

function TodoItem(props){
    return(
      <li className={`${props.completed && "completed"}`}>
        {/*<CompleteIcon/>*/}
        <input type="checkbox" 
        defaultChecked={props.completed}
        onClick={props.onComplete}  />
        <p className="todo-text">{props.text}</p>
        <button className="delete-btn"
        onClick={props.onDelete}
        >&times;</button>
        {/*<DeleteIcon/>*/}
      </li>
    );
  } 

  export {TodoItem} //named export