import {BrowserRouter, Routes, Route} from 'react-router-dom'
import routes from './routes'
const AppRoutes = () => {
 return (
    <BrowserRouter>
     <Routes>
        {
            routes.map((({ element: Element, path}) => {
                return <Route key={path} path={path} element={<Element />}/>
            }))
        }
     </Routes>
    </BrowserRouter>
 )
}

export default AppRoutes