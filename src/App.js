import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/auth_context';
import { AuthReducer } from './auth/auth_reducer';
import AppRouter from './routers/app_router'

const  App = () => {

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

// user=state
const [user , dispatch] = useReducer(AuthReducer, {}, init);

useEffect(() => {

  localStorage.setItem('user', JSON.stringify(user));  
 
}, [user])

 

  return (
    <AuthContext.Provider value={{user, dispatch}}>
    <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
