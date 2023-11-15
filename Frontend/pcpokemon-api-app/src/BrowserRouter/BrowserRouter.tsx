import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm';
import Layout from '../components/Layout/Layout'
import About from '../pages/About';

const router = [
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/subscribe",
                element:<RegisterForm />
            },
            {
                path:"/login",
                element:<LoginForm />
            },
            {
                path:"/about",
                element:<About />
            }
        ]
    }
]

export const BrowserRouter = createBrowserRouter(router)