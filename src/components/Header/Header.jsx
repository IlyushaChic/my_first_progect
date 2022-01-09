import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return <header className={s.header}>
      <img src='https://avatars.mds.yandex.net/get-zen_doc/1852544/pub_5d9c7384e4fff000aef9f6a6_5d9c738bc49f2900aea3ef0e/scale_1200' />
      <div className={s.loginBlock} >
         {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
      </div>
   </header >
}

export default Header;