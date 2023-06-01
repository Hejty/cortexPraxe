import PrimaryButton from "../components/buttons/PrimaryButton";

function Dates () {
    return (
        <div id="Dates" className="bg-[url('./img/poly-grey.png')] bg-repeat bg-center">
            <div className="p-[6.25rem_0] m-[0_auto]">
                <div className="mb-[1.25rem]">
                    <div className="ml-[25%] w-2/4 p-[0_0.75rem]">
                        <h4 className="uppercase text-center text-[2.28rem] leading-[110%] m-[1.5rem_0_0.9rem_0]">
                            dates
                        </h4>
                        <p className="leading-[1.375rem] text-center">
                            Get the edge over others thanks to PHP Academy
                        </p>
                    </div>
                </div>
                <div className="mb-[1.25rem]">
                    <div className="w-full p-[0_0.75rem] text-center">
                        <PrimaryButton description={"7.2. - 11.2 2022"} link={"Application"} />
                        <PrimaryButton description={"4.4 - 8.4 2022"} link={"Application"} />
                        <PrimaryButton description={"6.6 - 10.6 2022"} link={"Application"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dates;