import React, { } from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {



   let postElements =
      props.posts.map(p => <Posts ts message={p.message} likesCount={p.likesCount} />);




   return <div className={s.body}>
      <div className={s.ava}>
         <h3>My posts</h3>
      </div>

      <div>
         <textarea placeholder='wtf?!' className={s.qwerty} id="" cols="30" rows="10"></textarea>
         <br />
         <div className={s.as}>
            <button>Add post</button>
            <button>Post remove</button>
         </div>

      </div>
      <div >
         {postElements}


      </div>



   </div>

};


export default MyPosts;