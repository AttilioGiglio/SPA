import React, { useContext } from 'react'
import { AuthContext } from '../../auth/auth_context';
import { types } from '../../types/types';

const Login = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        
        const lastPath = localStorage.getItem('lastPath') || '|';

        dispatch({
            type: types.login,
            payload: {
                name: 'Attilio'
            }
        });
        history.replace(lastPath)
    }

    return (
        <div className='container mt-5' >
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default Login
