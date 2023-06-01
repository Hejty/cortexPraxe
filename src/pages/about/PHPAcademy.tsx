import ProgressBar from "../../components/Bar";
import ExperienceItem from "../../components/ExperienceItem";
import Header from "../../components/Header";

function PHPAcademy () {
    return (
        <>
            <div id="About" className="w-full h-full 2xl:bg-[url('./img/o-php-academy.png'),_url('./img/ipad.png')] bg-[position:left_bottom_4.375rem,_right_bottom_15.625rem] bg-no-repeat bg-[length:auto,_auto] border-b border-[#d6d6d6]">
                <div className="p-[6.3rem_0] w-[70%] m-[0_auto]">
                    <div className="mb-5">
                        <div className="2xl:w-2/4 2xl:ml-[25%] p-[0_0.75rem]">
                            <Header MainText={"php academy"} SubText={"training introduction"} />
                            <p className="leading-[1.375rem]">
                                Interactive training focused on homing basic programming knowledge, learning Object-Oriented Programing, and mastering any framework. Thanks to this training, you will gain programming knowledge, for example, for e-shop creation.
                            </p>
                            <br />
                            <p className="leading-[1.375rem]">
                                Graduating from PHP Academy provides you with capabilities and knowledge at the level of a junior programmer.
                            </p>
                            <br />
                            <p className="leading-[1.375rem]">
                                Training takes place during five training days with four-hour tuition and one hour of consulting.
                            </p>
                            <div>
                                <h5 className="text-center text-[1.64rem] leading-[110%] self-center m-[3.75rem_0]">
                                    TRAINING FOCUS
                                </h5>
                                <div className="lg:m-[0_5rem]">
                                    <ProgressBar heading={"Programmer Development"} widthProperty={"w-[70%]"} />
                                    <ProgressBar heading={"Gaining Practical Experience"} widthProperty={"w-[90%]"} />
                                    <ProgressBar heading={"Improved Code Understanding"} widthProperty={"w-[85%]"} />
                                </div>
                            </div>
                            <h5 className="text-[1.64rem] leading-[110%] text-center m-[5rem_0_3rem_0]">
                                Additional Information
                            </h5>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-center flex-wrap text-left w-full">
                            <ExperienceItem heading={"10"} description={"Experienced Tutors"} />
                            <ExperienceItem heading={"7"} description={"Main Topics with Real-Life Examples"} />
                            <ExperienceItem heading={"20+"} description={"Hours of Practical Tuition"} />
                            <ExperienceItem heading={"100%"} description={"Individual Approach"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PHPAcademy;