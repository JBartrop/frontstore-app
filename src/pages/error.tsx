import React from "react";
import { toast } from "react-toastify";


const Error: React.FC = () => {

    const handleChange = () => {
        toast.success("error here")
    }


    return(
        <div>
            <h1>Error page</h1>
            <button onClick={handleChange} >click me</button>
        </div>
    )
}

export default Error;