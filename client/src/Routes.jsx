import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function MainRoutes() {
    const ProtectedRoutes = ({ redirectTo }) => {
        const isAthenticated = localStorage.getItem('id');

        return isAthenticated ? <Outlet /> : <Navigate to={redirectTo} />
    }

    const PreventDuplicatedLoginRoutes = ({ redirectTo }) => {
        const isAthenticated = localStorage.getItem('id');

        return isAthenticated ? <Navigate to={redirectTo} /> : <Outlet />;
    }

    return (
        <Routes>
            <Route element={<PreventDuplicatedLoginRoutes redirectTo='/home' />}>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}