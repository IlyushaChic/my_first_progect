import React, { } from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
   return (
      <div className={`${s.item} ${s.active}`}>
         <img className={s.card} src="https://cutewallpaper.org/21/matrix-hd-background/Matrix-Decoded-Laptop-Background-.jpg" alt="" />
         {props.message}
         <div>
            <span>like </span>{props.likesCount}
         </div>
      </div>
   )
}

export default Posts;