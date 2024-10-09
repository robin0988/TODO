
import './TodoSwitch.css'

function TodoSwitch(){
    return(
    <div className="language-switch-container">
        <span className="lang-label">ES</span>
        <label className="switch">
            <input type="checkbox" id="langSwitch"></input>
            <span className="slider"></span>
        </label>
        <span className="lang-label">EN</span>
    </div>
    );
}

export {TodoSwitch}