import React, { useState }  from 'react';
import { AppUI } from './AppUI';

import '../style.css'
import { TodoProvider } from '../TodoContext';
import  '../utils/i18n/index.ts';

function App() {
  return(
    <TodoProvider>
        <AppUI/>
    </TodoProvider> 
  )
}


export default App;
