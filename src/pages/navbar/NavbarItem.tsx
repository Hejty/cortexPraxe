interface NavProps {
    description: string;
    link: string;
    main?: boolean;
}

function NavbarItem ({description, link, main}:NavProps) {
    return (
        <>
            <li className="">
                <a href={`#${link}`} 
                    className={`uppercase ${main ? "text-[#f55d4b]" : "text-white"} text-[0.9375rem] md:p-6 p-2 transition duration-300 ease-in-out hover:bg-black hover:cursor-pointer`}>
                    {description}
                </a>
            </li>
        </>
    );
}

export default NavbarItem;