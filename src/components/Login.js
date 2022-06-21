import React from 'react';
import {useDispatch} from 'react-redux';
import {login, logout} from '../feature/user';

const Login = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(login({
            name:"Petek",
            age: 25,
            email: "petek@gmail.com"
        })) }>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login