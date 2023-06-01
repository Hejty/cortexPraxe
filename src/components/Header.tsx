import React from "react";

interface HeaderProps {
    MainText: string;
    SubText: string;
    alternate?: boolean;
}

function Header ({MainText, SubText, alternate}:HeaderProps) {
    return (
        <div
        className="relative mb-6">
            <h1
            className={`text-[3.875rem] ${alternate === true ? "text-[rgba(255,_255,_255,_0.7)]" : "text-[rgba(68,_68,_68,_0.1)]"} leading-[110%] text-center uppercase`}>
                {MainText}
            </h1>
            <h5
            className="text-[1.64rem] leading-[110%] text-center uppercase">
                {SubText}
            </h5>
            <div>
                
            </div>
        </div>
    );
}

export default Header;