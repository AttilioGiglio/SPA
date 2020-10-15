import React, { useReducer } from 'react';
import { AuthContext } from './auth/auth_context';
import { AuthReducer } from './auth/auth_reducer';
import AppRouter from './routers/app_router'

const  App = () => {

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

// user=state
  const [user , dispatch] = useReducer(AuthReducer, {}, init)

  return (
    <AuthContext.Provider value={{user, dispatch}}>
    <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
