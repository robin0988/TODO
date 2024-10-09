
import './TodoSwitch.css'
import react from 'react';
import { TodoContext } from '../TodoContext';
import i18next from 'i18next';

function TodoSwitch(){
    const {switchLanguage} = react.useContext(TodoContext);

    return(
    <div className="language-switch-container">
        <span className="lang-label">EN</span>
        <label className="switch">
            <input type="checkbox" id="langSwitch" onClick={switchLanguage}></input>
            <span className="slider"></span>
        </label>
        <span className="lang-label">ES</span>
    </div>
    );
}

export {TodoSwitch}