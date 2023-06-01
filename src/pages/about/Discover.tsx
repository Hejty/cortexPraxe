import BackgroundButton from "../../components/buttons/BackgroundButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function Discover () {
    return (
        <div className="bg-[url('./img/poly-orange.png')] md:bg-[url('./img/o-white.png'),_url('./img/poly-orange.png')] bg-[position:left_center,_center] bg-no-repeat bg-[length:auto,_auto] text-[#fff] text-center">
            <div className="p-[12.5rem_0] w-[70%] m-[0_auto]">
                <div className="mb-[1.25rem]">
                    <div className="md:ml-[25%] md:w-2/4 p-[0_0.75rem]">
                        <h4 className="text-[2.28rem] leading-[110%] m-[1.52rem_0_0.912rem_0] text-center">
                            DISCOVER THE WORLD OF PHP ACADEMY
                        </h4>
                        <p className="leading-[1.375rem] text-center">
                            Sign up for PHP Academy training to learn everything necessary to make programming your dream job.
                        </p>
                    </div>
                </div>
                <div className="mb-[1.25rem] flex justify-center">
                    <BackgroundButton description={"Sign Up"} link={"Application"} />
                    <PrimaryButton description={"Dates"} link={"Dates"} alternate/>
                </div>
            </div>
        </div>
    );
};

export default Discover;