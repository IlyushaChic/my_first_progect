
import React, { useContext } from "react";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";
import { AuthContext } from "../context";


function Login() {
   const [isAuth, setIsAutn] = useContext(AuthContext)

   const login = event => {
      event.preventDefault();
      setIsAutn(true);
      localStorage.getItem('auth','true')

   }

   return (
      <div >
         <h1 style={{color: '#EE82EE'}}>Страница для логина !</h1>
         <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите логин" />
            <MyInput type="password" placeholder="Введите пароль" />
            <MyButton > Войти</MyButton>

         </form>
      </div>
   )
}

export default Login;