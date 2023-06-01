import React from "react";

interface ButtonProps {
    description: string;
    link: string;
}

function FlatButton ({description, link}:ButtonProps) {
    return (
        <>
        <a 
        href={`#${link}`}
        className="inline-block w-max m-[0.625rem] p-[0.4375rem_2rem] rounded-[1rem] cursor-pointer text-[0.9375rem]
        border border-black  
        transition duration-300 ease-in-out hover:text-white hover:bg-[#f55d4b] hover:border-[#f55d4b]">
            {description}
        </a>
        </>
    );
}

export default FlatButton;