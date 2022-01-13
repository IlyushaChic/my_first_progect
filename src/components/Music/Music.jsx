import React, { } from 'react';
import s from './Music.module.css';

const Music = () => {
   return (
      <div className={s.music}>
         <div>
            <input className={s.inp} placeholder={'Music'} type="text" />
         </div>
         <div>
            <button className={s.serach}>Search</button>
         </div>
      </div>
   )
}

export default Music;