import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";
export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useAuth();
    if (auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
};