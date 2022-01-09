import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
   return (
      <nav className={s.nav}>
         <div className={`${s.item} `}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
         </div>
         <div className={`${s.item}  `}>
            <NavLink to='/Dialoges' activeClassName={s.active}>Messanges</NavLink>
         </div>
         <div className={`${s.item} `}>
            <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
         </div>
         <div className={`${s.item} `}>
            <NavLink to='/News' activeClassName={s.active}>News</NavLink>
         </div>
         <div className={`${s.item} `}>
            <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
         </div>
         <div className={`${s.item}`}>
            <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
         </div>
      </nav>
   )
}

export default NavBar;