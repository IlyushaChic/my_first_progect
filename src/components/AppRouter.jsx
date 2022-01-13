
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router/index.jsx";
import Loader from "./UI/Loader/Loader";

function AppRouter() {
   const [isAuth, isLoading] = useContext(AuthContext)


   if(!isLoading){
      return <Loader/>

   }

   const privatR = privateRoutes.map((r) => {
      return (
         <Route exact={r.exact} path={r.path} element={r.element} key={r.path} />)
   })

   const publicR = publicRoutes.map((r) => {
      return (
         <Route exact={r.exact} path={r.path} element={r.element} key={r.path} />)
   })


   return (
      isAuth
         ?
         <Routes>
            {privatR}<Route path="*" element={<Error />} />
            <Route path="/login" element={<Navigate to='/posts/' />} />
         </Routes>
         
         : <Routes>
            {publicR}<Route path="*" element={<Navigate to='/login' />} />
         </Routes>
   )
}

export default AppRouter;
