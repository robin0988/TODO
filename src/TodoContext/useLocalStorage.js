import React from "react";

  /*
  localStorage.removeItem('EWTODO_V1');
  const defaultTodos =[
  {text: "Review appoiments" , completed:true},
  {text: "Fix allocation issues for VOU" , completed:false},
]

localStorage.setItem('EWTODO_V1',JSON.stringify(defaultTodos));

*/

function useLocalStorage(itemName,initialValue){
 
    const [item,setItem] =  React.useState(initialValue);
    const [loading,setLoading] =  React.useState(true);
    const [error,setError] =  React.useState(false);

    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          console.log('paso por aqui...');
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parsedItem=[];
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
          }
          console.log('executed...');
          setLoading(false);
        } catch(error){
          setError(true);
          setLoading(false);
        }
      },2000)
    },[]);

    const saveItem= (newItem) => {
      localStorage.setItem(itemName,
        JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {item,
            saveItem,
            loading,
            error,};
  }

  export {useLocalStorage};
