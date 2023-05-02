import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/errorPage/ErrorPage";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:5000/chefs')
            },
            {
                path: '/blog',
                element: <Blogs/>
            },
            {
                path: '/chef-recipes/:id',
                element: <ChefRecipes/>,
                loader: ({params})=> fetch(`http://localhost:5000/chef-recipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;