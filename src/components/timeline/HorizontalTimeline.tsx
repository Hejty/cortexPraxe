import TimelineItem from "./TimelineItem";

function HorizontalTimeline () {
    return (
        <>
            <div className="w-10/12 ml-[8.333%] p-[0_0.75rem] m-[3.75rem_0_6.25rem_0] hidden 2xl:block">
                <table className="w-full bg-[url('./img/timeline.png')] bg-no-repeat bg-center bg-[size:100%_100%] m-[3.75rem_0_6.25rem_0] table border-collapse border-spacing-0">
                    <tbody>
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"w-[3%]"}/>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"w-[13%]"}/>
                            <TimelineItem heading={"PostgreSQL and DIBI"} description={"Database abstraction library"} topicCount={"2nd topic"} sizeProperty={"w-[18%]"}/>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"w-[15%]"}/>
                            <TimelineItem heading={"Advanced techniques"} description={"PHP made more efficient"} topicCount={"4th topic"} sizeProperty={"w-[16%]"}/>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"w-[15%]"}/>
                            <TimelineItem heading={"AJAX"} description={"JSON"} topicCount={"6th topic"} sizeProperty={"w-[9%]"}/>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"w-[11%]"}/>
                        </tr>
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""}/>
                            <TimelineItem heading={"OOP in PHP"} description={"Program as a kit set"} topicCount={"1st topic"}/>
                            <TimelineItem heading={""} description={""} topicCount={""}/>
                            <TimelineItem heading={"Application architecture"} description={"Design patterns"} topicCount={"3rd topic"}/>
                            <TimelineItem heading={""} description={""} topicCount={""}/>
                            <TimelineItem heading={"SECURITY"} description={"Common vulnerabilities"} topicCount={"5th topic"}/>
                            <TimelineItem heading={""} description={""} topicCount={""}/>
                            <TimelineItem heading={"Integrations"} description={"SOAP, REST API"} topicCount={"7th topic"}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default HorizontalTimeline;