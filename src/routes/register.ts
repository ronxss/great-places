import React from 'react'

const Register = React.lazy(() => import('../pages/register'))

const route = [
    {
        path:'/register',
        element: Register,
    }
]

export default route