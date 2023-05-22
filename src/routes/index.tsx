import { Routes, Route, Navigate } from 'react-router-dom';
import { About } from '../pages/about';
import { Home } from '../pages/home';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}