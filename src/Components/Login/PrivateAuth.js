import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateAuth = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    let location = useLocation();
    if (Loading) {
        return <p className="text-center">Loading...</p>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};
export default PrivateAuth;