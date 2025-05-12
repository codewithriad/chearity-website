import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Donate from '../Pages/DonatePage/Donate'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
           {
            path:'/donate',
            element:<Donate/>
           }
            
        ]
    }
])

