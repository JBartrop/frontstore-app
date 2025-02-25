import React, { useState } from "react"
import Input from "../components/input";
import { toast } from "react-toastify";
import { ActionFunctionArgs, useFetcher } from "react-router-dom";




export async function LoginAction() {
    await new Promise(res=> setTimeout(res, Math.random() * 1000)) ;
}
const Login: React.FC = () => {


    const fetcher = useFetcher();
    const issubmitting = fetcher.state === "submitting"
    const [inputdata, setinputdata] = useState({
        username : "",
        password : ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setinputdata((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
        // console.log(name, value)
    }

    const handleSave = () => {
        console.log("Updated Data:", inputdata);
        toast.success("created profile successfully!");
        localStorage.setItem("frontendstoreprofile", JSON.stringify([inputdata]) )
        setinputdata ({
            username: "",
            password: ""
        })
    };

    return (
        <div>
            <h1>login here</h1>
            <fetcher.Form method="POST" action="/">
            <Input type="text" name="username" placeholder="enter username" value={inputdata.username} onChange={handleChange} />
            <Input type="password" name="password" placeholder="enter password" value={inputdata.password} onChange={handleChange} />
            <button
                type="button"
                onClick={handleSave}
                className="bg-green-300 text-black px-4 py-2 rounded hover:bg-green-400"
                disabled={issubmitting}
            >{issubmitting? "creating account" : "Save Changes" }
            </button>
            </fetcher.Form>
            
        </div>
    )
}

export default Login;