import React from "react";
import { Trans } from "react-i18next";
function TodoEmpty(){
      return(
        <li className='no-info'>
        <Trans i18nKey="addNewTODOMessage">
        <p className="no-info-text">You can create your first TODO.</p>
        </Trans>
       </li>
      );
    } 
  
    export {TodoEmpty};