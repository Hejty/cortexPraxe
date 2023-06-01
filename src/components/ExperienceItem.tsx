interface ExperienceItemProps {
    heading: string;
    description: string;
}

function ExperienceItem ({heading, description}:ExperienceItemProps) {
    return (
        <>
            <div className="w-[13.75rem] m-[0.3125rem]">
                <h4 className="text-[2.28rem] leading-[110%] m-[1.5rem_0_0.9rem_0]">
                    <span>
                        {heading}
                    </span>
                </h4>
                <p className="leading-[1.375rem]">
                    {description}
                </p>
            </div>
        </>
    );
};

export default ExperienceItem;