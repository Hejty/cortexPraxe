import NavbarItem from "./NavbarItem";

function Navbar () {
    return (
        <>
            <div className="sticky top-0 h-16 bg-[#2a2a2a] drop-shadow overflow-hidden z-10">
                <ul className="h-full flex justify-center items-center">
                    <NavbarItem description={"home"} link={"Home"} main/>
                    <NavbarItem description={"about academy"} link={"About"} />
                    <NavbarItem description={"prices"} link={"Price"} />
                    <NavbarItem description={"dates"} link={"Dates"} />
                    <NavbarItem description={"reservations"} link={"Application"}/>
                    <NavbarItem description={"contact us"} link={"Contacts"} />
                </ul>
            </div>
        </>
    );
}

export default Navbar;