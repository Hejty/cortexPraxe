import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../components/Header";
import PrimaryButton from "../components/buttons/PrimaryButton";

function Price () {
    return (
        <div id="Price" className="bg-[url('./img/o-price.png'),_url('./img/details.png')] bg-[position:right_center,_center] bg-no-repeat bg-[length:auto,_cover] bg-[#f55d4b]">
            <div className="pb-[5rem]">
                <div className="p-[6.25rem_0]">
                    <Header MainText={"training price"} SubText={"choose the one"} alternate={true} />
                </div>
                <div>
                    <Swiper centeredSlides={true} slideToClickedSlide={true} slidesPerView={3} spaceBetween={150} loop={true} className="!px-40 !hidden 2xl:!block">
                        <SwiperSlide className=" bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Student Academy
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                Only € 20* incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                Common student price € 199
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For students under 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                * Are you a student, and you want to get the lowest possible price? Use our cash-back bonus! Have 100 % training attendance, fulfill all assignments, and then prove your newly gained knowledge at Cortex. After the full payment and meeting the conditions, we will cash you back € 180. Then the training costs only € 20!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Regular Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 399 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                GET PRACTICAL TRAINING FOR A FAIR PRICE
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For older than 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Early Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 299 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                SIGN UP EARLY AND ENJOY DISCOUNT.
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For registrations more than a month before the start date.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                For older than 26 years. Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className=" bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Student Academy
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                Only € 20* incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                Common student price € 199
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For students under 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                * Are you a student, and you want to get the lowest possible price? Use our cash-back bonus! Have 100 % training attendance, fulfill all assignments, and then prove your newly gained knowledge at Cortex. After the full payment and meeting the conditions, we will cash you back € 180. Then the training costs only € 20!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Regular Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 399 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                GET PRACTICAL TRAINING FOR A FAIR PRICE
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For older than 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Early Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 299 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                SIGN UP EARLY AND ENJOY DISCOUNT.
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For registrations more than a month before the start date.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                For older than 26 years. Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper centeredSlides={true} slideToClickedSlide={true} slidesPerView={1} spaceBetween={150} loop={true} className="!px-40 !block 2xl:!hidden">
                        <SwiperSlide className=" bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Student Academy
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                Only € 20* incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                Common student price € 199
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For students under 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                * Are you a student, and you want to get the lowest possible price? Use our cash-back bonus! Have 100 % training attendance, fulfill all assignments, and then prove your newly gained knowledge at Cortex. After the full payment and meeting the conditions, we will cash you back € 180. Then the training costs only € 20!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Regular Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 399 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                GET PRACTICAL TRAINING FOR A FAIR PRICE
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For older than 26 years.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#fff] text-center rounded-2xl p-12 cursor-pointer">
                            <h5 className="text-[1.64rem] text-[#f55d4b]">
                                Early Access
                            </h5>
                            <h4 className="text-[2.28rem] text-[#f55d4b]">
                                € 299 incl VAT
                            </h4>
                            <h6 className="text-[1.15rem] mb-[1.25rem]">
                                SIGN UP EARLY AND ENJOY DISCOUNT.
                            </h6>
                            <p className="leading-[1.375rem] mb-[1.25rem]">
                                For registrations more than a month before the start date.
                            </p>
                            <PrimaryButton description={"Sign Up"} link={"Application"} />
                            <p className="text-[0.75rem] text-[#727272] leading-[1.375rem] my-[1.25rem]">
                                For older than 26 years. Suitable for professionals and enthusiasts aiming to expand their knowledge in OOP programming.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Price;