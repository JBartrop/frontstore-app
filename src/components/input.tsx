import React from "react";

interface inputType {
    name: String;
}

const input: React.FC<inputType> = ({name}) => {
    return (
        <div>
            <h1>inputs here</h1>
        </div>
    )
}