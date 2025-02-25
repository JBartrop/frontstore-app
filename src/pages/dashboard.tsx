import React from "react";
import { useLoaderData, ActionFunctionArgs } from "react-router-dom";
import Login from "./login";
import { toast } from "react-toastify";

export function dashboardLoader(): string | null {
    const Userprofile = localStorage.getItem("frontendstoreprofile")
    return(Userprofile)
    
}


const Dashboard: React.FC = () => {
    const Userprofile = useLoaderData()  as string | null;
    console.log(Userprofile)
    return(
        <div className="dashboard">
            {Userprofile ? (<h1>Dashboard</h1>) : <Login />}
            
        </div>
    )
}

export default Dashboard;