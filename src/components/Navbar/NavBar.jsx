import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';


const NavBar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to='/Profile' className={e => e.isActive ? s.active : s.item}>Profile</NavLink>
         </div>
         <div className={`${s.item} ${s.active}`}>
            <NavLink to='/Dialoges/0' className={e => e.isActive ? s.active : s.item}>Messanges</NavLink>

         </div>
         <div className={s.item}>
            <NavLink to='/News' className={e => e.isActive ? s.active : s.item}>News</NavLink>

         </div>
         <div className={s.item}>
            <NavLink to='/Music' className={e => e.isActive ? s.active : s.item}>Music</NavLink>

         </div>
         <div className={s.item}>
            <NavLink to='/Settings' className={e => e.isActive ? s.active : s.item}>Settings</NavLink>

         </div>


      </nav>
   )
}


export default NavBar;