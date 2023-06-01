import React from "react";

interface ButtonProps {
    description: string;
    link: string;
    alternate?: boolean;
}

function PrimaryButton ({description, link, alternate}:ButtonProps) {
    return (
        <>
            <a href={`#${link}`}
            className={`inline-block w-max m-[0.625rem] p-[0.4375rem_2rem] rounded-[1rem] cursor-pointer text-[0.9375rem]
            border bg-[#f55d4b] text-[#fff] ${alternate == true ? "border-white" : "border-[#f55d4b]"}
            transition duration-300 ease-in-out hover:text-[#f55d4b] border-[#f55d4b] hover:bg-white`}>
                {description}
            </a>
        </>
    );
}

export default PrimaryButton;