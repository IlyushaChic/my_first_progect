import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
   const [post, setPost] = useState({ title: '', body: '' })

   const addNewPost = (e) => {
      e.preventDefault()
      const newPost={
         ...post,id: Date.now()
      }
      create(newPost)
      setPost({ title: '', body: '' })
   }


   return (
      <form action="">
         <MyInput
            onChange={e => setPost({ ...post, title: e.target.value })}
            value={post.title}
            type="text"
            placeholder="Название поста:"
         />
         <MyInput
            onChange={e => setPost({ ...post, body: e.target.value })}
            value={post.body}
            type="text"
            placeholder="Описание поста:"
         />
         <MyButton onClick={addNewPost}>Создание поста</MyButton>
      </form>
   );
};

export default PostForm;