import React, { } from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
   let postElements =
      props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);
   let newPostElement = React.createRef();
   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }
   return <div className={s.body}>
      <div className={s.ava}>
         <h4>My posts: </h4>
      </div>
      <div>
         <textarea onChange={onPostChange} ref={newPostElement} placeholder='wtf?!' className={s.qwerty}
            value={props.newPostText} />
         <br />
         <div className={s.as}>
            <button onClick={onAddPost}>Add post</button>
            <button>Post remove</button>
         </div>
      </div>
      <div >
         {postElements}
      </div>
   </div>
};

export default MyPosts;