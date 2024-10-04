let [state,setState] = React.useState(0);
function TodoClick(){
 return(
    <>
        <p>
            You have clicked {state} times
        </p>
        <button>
            onClick={() => {setState(state++)}}
        </button>
    </>
 );
}