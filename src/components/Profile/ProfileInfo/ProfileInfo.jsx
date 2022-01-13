import React, { } from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

   if (!props.profile.photos.large) {
      return <Preloader />
   }
   return <div className={s.body} >
      <div className={s.image}> </div>
      <div className={s.ava}>
         <img src={props.profile.photos.large} />
         Description
      </div>
   </div>
};

export default ProfileInfo;