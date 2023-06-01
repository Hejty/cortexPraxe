import Header from "../../components/Header";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function WillGet () {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
            <div className="lg:bg-[url('./img/light-lamp.png'),_url('./img/o-co-ziskam.png')] bg-[position:left_2.5rem_top,_left_85%_center] bg-no-repeat bg-[length:auto,_auto] bg-[#fafafa]">
                <div className="p-[6.25rem_0] w-[70%] m-[0_auto]">
                    <div className="mb-[1.25rem]">
                        <div className="lg:w-2/4 p-[0_0.75rem]">
                            <Header MainText={"what will i gain?"} SubText={"by graduating php academy"} />
                            <p className="leading-[1.375rem]">
                                At the end of the training, you will acquire:
                            </p>
                            <ul className="m-[3.125rem_0]">
                                <li className="leading-[1.375rem]">
                                    <i className="material-symbols-outlined text-[#f55d4b] !text-[1rem]">grade</i> Essential knowledge for Object-Oriented Programming
                                </li>
                                <li className="leading-[1.375rem]">
                                    <i className="material-symbols-outlined text-[#f55d4b] !text-[1rem]">grade</i>Access to online lectures
                                </li>
                                <li className="leading-[1.375rem]">
                                    <i className="material-symbols-outlined text-[#f55d4b] !text-[1rem]">grade</i>Practical tips & tricks for more effective PHP use
                                </li>
                                <li className="leading-[1.375rem]">
                                    <i className="material-symbols-outlined text-[#f55d4b] !text-[1rem]">grade</i>Graduation certificate
                                </li>
                            </ul>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WillGet;