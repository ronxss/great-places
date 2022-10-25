import React from 'react'

const Home = React.lazy(() => import('../pages/home'))

const route = [
    {
        path:'/',
        element: Home,
    }
]

export default route