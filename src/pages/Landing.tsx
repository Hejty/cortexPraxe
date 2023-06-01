import {useEffect} from "react";
import FlatButton from "../components/buttons/FlatButton";
import "../App.css";



function Landing () {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const HalfCircleElement = document.getElementById("HalfCircle");
            if (HalfCircleElement) {
                HalfCircleElement.style.transform = `translateY(${(event.clientY / window.innerHeight) *-5}%)`;
            }

            const FullCircleElement = document.getElementById("FullCircle");
            if (FullCircleElement) {
                FullCircleElement.style.transform = `translateX(${(event.clientX / window.innerWidth) * -3}%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id="Home">
                <div className="absolute flex flex-col justify-center align-center top-2/4 w-4/6 z-[1] translate-x-[20%] translate-y-[-50%]">
                    <div className="object-fit:contain mb-[1.25rem] p-[2.125rem_0_2.125rem_1.1875rem] bg-[url('./img/ellipse.png')] bg-[length:11.9375rem_11.9375rem] bg-no-repeat bg-left">
                        <div className="px-3 hidden xl:block">
                            <h4 className="text-[2rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                <span className="text-white">Gain Basic</span> Knowledge for E-Shop Creation
                            </h4>
                            <h2 className="text-[3.1875rem] leading-[110%]">
                                <span className="text-white">#PHP</span> ACADEMY
                            </h2>
                        </div>
                        <div className="px-3 block xl:hidden">
                            <h4 className="text-[2rem] leading-[110%] m-[1.52rem_0_0.912rem_0]">
                                Gain Basic Knowledge for E-Shop Creation
                            </h4>
                            <h2 className="text-[3.1875rem] leading-[110%]">
                                #PHP ACADEMY
                            </h2>
                        </div>
                    </div>
                    <p className="m-[0.625rem]"> Experience training focused on tools and principles.</p>
                    <div className="w-10/12 px-3">
                        <FlatButton description={"Sign Up"} link={"Application"} />
                    </div>
                </div>
                <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
                    <div id="HalfCircle" className="absolute bg-[bottom_10%_right_37%] w-full h-full xl:bg-[url('./img/test1.png')] bg-no-repeat bg-[length:5%]" />
                    <div id="FullCircle" className="absolute left-2/4 bg-[right_top_17%] w-full h-full xl:bg-[url('./img/test3.png')] bg-no-repeat ml-[-62.5rem] bg-[length:33%]" />
                    <div className="absolute bg-[bottom_right_5%] w-full h-full xl:bg-[url('./img/test2.png')] bg-no-repeat bg-[length:32%]" />
                </div>
            </div>
        </>
    );
}

export default Landing;