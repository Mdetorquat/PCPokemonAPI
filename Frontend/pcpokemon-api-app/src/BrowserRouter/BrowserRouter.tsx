import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout/Layout'

const router = [
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/register",
                element:<RegisterForm />
            },
            {
                path:"/login",
                element:<LoginForm />
            }
        ]
    }
]

export const BrowserRouter = createBrowserRouter(router)