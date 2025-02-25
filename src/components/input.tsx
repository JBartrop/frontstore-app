import React from "react";

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange }) => {
    return (
        <div>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            className="p-3 border border-black m-4 bg-transparent text-black rounded-md " />
        </div>
    )
}

export default Input;