import About from "../pages/About"
import Login from "../pages/Login"
import PostIdPages from "../pages/PostIdPages"
import Posts from "../pages/Posts"


export const privateRoutes =[
   
   { exact: false ,path: '/about', element: <About/> , },
   { exact: true ,path: '/posts', element: <Posts/>, },
   { exact: true ,path: '/posts/:id', element: <PostIdPages/>, },
]


export const publicRoutes =[
   { exact: true ,path: '/login', element: <Login/>, },

]