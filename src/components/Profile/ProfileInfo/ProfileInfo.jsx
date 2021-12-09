import React, { } from 'react';

import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
   return <div  className= {s.body} >
      <div className = {s.image}> </div>
   
            <div className={s.ava}>
         Description
      </div>
   </div>

};


export default ProfileInfo;