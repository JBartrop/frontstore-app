import React from "react";
import { Outlet } from "react-router-dom";

const Auth: React.FC = () => {
    return (
        <div className="auth">
            <h1>auth page main here layout</h1>
            <Outlet />
        </div>
    )
}

export default Auth;