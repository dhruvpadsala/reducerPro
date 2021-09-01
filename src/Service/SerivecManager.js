import React from 'react';
import axios from 'axios';

export const getRequestApi=({url,dispatch,actionType,actionTypeFail})=>{
     axios
       .get(url)
       .then((response)=> {
         console.log('======response data=====', response);
         dispatch({type: actionType,payload:response});
       })
       .catch((error)=>{
           dispatch({type: actionTypeFail, payload: error});
       })
}