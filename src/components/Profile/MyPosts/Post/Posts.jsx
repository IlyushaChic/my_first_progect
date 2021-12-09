import React, { } from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
   return (


      <div className={`${s.item} ${s.active}`}>
         <img className={s.card} src="https://www.tapeciarnia.pl/tapety/normalne/44016_avatar_oko.jpg" alt="" />
         {props.message}
         <div>
            <span>like </span>{props.likesCount}
         </div>
      </div>

   )

}


export default Posts;