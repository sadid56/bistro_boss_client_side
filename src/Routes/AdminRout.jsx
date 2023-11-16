/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const [isAdmin, adminLoading] = useAdmin()
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading || adminLoading){
        return <p>loading...</p>
    }
    
    if(user && isAdmin){
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
  
}
 
export default AdminRoute;