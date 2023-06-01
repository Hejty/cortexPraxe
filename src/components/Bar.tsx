interface BarProps {
    heading: string;
    widthProperty: string;
}

function ProgressBar ({heading, widthProperty}:BarProps) {
    return (
        <>
            <p className="leading-[1.375rem]">
                {heading}
            </p>
            <div className="relative w-full h-[0.3125rem] bg-[rgba(68,_68,_68,_0.1)] m-[0.9375rem_0]">
                <div className={`absolute bg-[#f55d4b] h-[5px] ${widthProperty}`} />
            </div>
        </>
    );
};

export default ProgressBar;