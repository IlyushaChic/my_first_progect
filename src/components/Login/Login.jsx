import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './login.module.css';


const Login = (props) => {
   return (
      <form >
         <div>
            <input className={s.log} placeholder={'Login'} type="text" />
         </div>
         <div>
            <input className={s.log} placeholder={'Password'} type="text" />
         </div>
         <div>
            <input type={"checkbox"} /> remember  me
         </div>
         <div>
            <button className={s.cheack}>Login</button>
         </div>
      </form>
   )
}

export default Login;






