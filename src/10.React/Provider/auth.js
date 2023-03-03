import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import db_admin from "../db/admin";

const AuthContext = createContext();
//
const AuthProvider = ({ children }) => {
    // hook
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    //
    const f_login = ({ username }) => {
        const isAdmin = db_admin.find((admin) => admin === username);
        setUser({ username, isAdmin });
        navigate("/profile");
    };

    const f_logout = () => {
        setUser(null);
        navigate("/");
    };

    const auth = { user, f_login, f_logout };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const AuthRoute = ({ children }) => {
    const auth = useContext(AuthContext);
    if (!auth.user) {
        return <Navigate to="/login" />;
    }
    return children;
};

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export { AuthProvider, AuthRoute, useAuth };
