import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const location = useLocation()
    const { user } = useSelector(state => state.auth)

    console.log(user, location)

    return user ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />
}

export default PrivateRoute

// referensi https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route
