
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import s from './postIdPages.module.css';

function PostIdPages() {
   const params = useParams();
   const [post, setPost] = useState({});
   const [comment, setComment] = useState([]);
   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data);
   })

   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComment(response.data);
   })



   useEffect(() => {
      fetchPostById(params.id)
      fetchComments(params.id)
   }, [])

   return (
      <div className={s.pages}>
         <h1> Вы открыли страницу поста с ID = {params.id}</h1>
         {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}</div>
         }
         <h1>
            Комментарии
         </h1>
         {isComLoading
            ? <Loader />
            : <div >
               {comment.map(comm =>
                  <div id={comm.id} style={{ magrin: 15 }}>
                     <h5>{comm.email}</h5>
                     <div>{comm.body}</div>
                  </div>
               )}
            </div>


         }

      </div>
   )
}

export default PostIdPages;