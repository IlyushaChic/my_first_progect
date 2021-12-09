import React, { } from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {



   return <div >
      <div className={s.images}></div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />


   </div>

};


export default Profile;