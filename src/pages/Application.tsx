import Header from "../components/Header";

function Application () {
    return (
        <div id="Application" className="bg-[url('./img/o-form.png'),_url('./img/blank-business-composition.png')] bg-[position:left_center,_center] bg-no-repeat">
            <div className="p-[6.25rem_0] w-[70%] m-[0_auto]">
                <div className="mb-6">
                    <Header MainText={"application"} SubText={"sign up and discover the world of #php"} alternate={true} />
                </div>
                <div className="mb-6">
                    <form action="">
                        <div className="lg:w-8/12 lg:ml-[16.66666667%]">
                            <div className="h-12 bg-[#f55d4b] rounded-t-2xl">
                            </div>
                            <div className="bg-white rounded-b-2xl p-10">
                                <div className="mb-6">
                                    <div className="w-2/4 p-[0_0.75rem] float-left">
                                        <div className="relative w-full p-[0_0.75rem] my-4 left-auto right-auto">
                                            <input id="name" name="name" type="text" placeholder=" " className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2"/>
                                            <label htmlFor="name" className="w-full absolute left-3 text-[#f55d4b] cursor-text">
                                                Name and Surname
                                            </label>
                                        </div>
                                        <div className="relative w-full p-[0_0.75rem] my-4 left-auto right-auto">
                                            <input id="mail" name="mail" type="email" placeholder=" " className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2"/>
                                            <label htmlFor="mail" className="w-full absolute left-3 text-[#f55d4b] cursor-text">
                                                E-mail
                                            </label>
                                        </div>
                                        <div className="relative w-full p-[0_0.75rem] my-4 left-auto right-auto">
                                            <input id="phone" name="phone" type="tel" placeholder=" " className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2"/>
                                            <label htmlFor="phone" className="w-full absolute left-3 text-[#f55d4b] cursor-text">
                                                Phone number
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-2/4 p-[0_0.75rem] float-left">
                                        <div className="relative w-full p-[0_0.75rem] my-4 left-auto right-auto">
                                            <select id="type" name="type" className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2">
                                                <option value="Regular">Regular Access</option>
                                                <option value="Early">Early Access</option>
                                                <option value="Student">Student Academy</option>
                                            </select>
                                            <label htmlFor="type" className="w-full absolute left-3 top-[-1.5rem] text-[0.8rem] text-[#f55d4b]">
                                                Crouse price
                                            </label>
                                        </div>
                                        <div className="relative w-full p-[0_0.75rem] my-4 left-auto right-auto">
                                            <select id="date" name="date" className="w-full outline-none border-b border-[#9e9e9e] h-12 mb-2">
                                                <option value="Feb">7.2. - 11.2 2022</option>
                                                <option value="Apr">4.4 - 8.4 2022</option>
                                                <option value="June">6.6 - 10.6 2022</option>
                                            </select>
                                            <label htmlFor="date" className="w-full absolute left-3 top-[-1.5rem] text-[0.8rem] text-[#f55d4b]">
                                                Date
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="w-7/12 p-[0_0.75rem]">
                                        <button type="submit" className="select-none inline-block border border-[#f55d4b] w-max m-[0.625rem] p-[0.4375rem_2rem] rounded-[1rem] cursor-pointer text-[0.9375rem] text-white bg-[#f55d4b] 
                                            transition duration-300 ease-in-out hover:text-[#f55d4b] hover:bg-white">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;