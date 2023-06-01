function Contacts () {
    return (
        <div id="Contacts" className="bg-[url('./img/poly-grey.png')] bg-repeat bg-center py-6">
            <div className="w-[70%] m-[0_auto]">
                <div className="flex flex-wrap xl:flex-row flex-col">
                    <div className="p-[0_0.75rem] xl:w-2/6 w-1/2 self-center text-center">
                        <h5 className="text-[1.64rem] leading-[110%] m-[1rem_0_0.6667rem_0]">
                            Contacts
                        </h5>
                        <p className="leading-[1.375rem]">
                            Cortex, a.s. 
                            <br />
                            U Elektry 974/1c, 
                            <br />
                            190 00 Praha
                        </p>
                    </div>
                    <div className="p-[0_0.75rem] xl:w-2/6 w-1/2 self-center text-center xl:border-x border-[#f55d4b]">
                        <h5 className="text-[1.64rem] leading-[110%] m-[1rem_0_0.6667rem_0]">
                            Phone
                        </h5>
                        <p className="leading-[1.375rem]">
                            +420 266 610 465
                        </p>
                        <h5 className="text-[1.64rem] leading-[110%] m-[0_0_0.6667rem_0]">
                            E-mail
                        </h5>
                        <p className="leading-[1.375rem]">
                            phpacademy@cortex.cz
                        </p>
                    </div>
                    <div className="p-[0_0.75rem] xl:w-2/6 w-1/2 self-center text-center">
                        <p className="leading-[1.375rem]">
                            IČO: 471 256 16, DIČ: CZ 471 256 16
                            <br />
                            Cortex, a.s. is registered in commercial register
                            <br />
                            by the Prague Municipal court,
                            <br />
                            section C, entry 13052
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;