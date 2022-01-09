import React, { } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <div>
         <div className={s.images}></div>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer/>
      </div>
   )
}

export default Profile;