import Header from "../../components/Header";
import HorizontalTimeline from "../../components/timeline/HorizontalTimeline";
import VerticalTimeline from "../../components/timeline/VerticalTimeline";

function Timeline () {
    return (
        <div>
            <div className="mt-24 mb-12">
                <Header MainText={"training timeline"} SubText={"the main topics"} />
            </div>
            <div className="mb-6">
                <div className="w-full p-[0_0.75rem]">
                    <p className="leading-[1.375rem] text-center">
                        We selected the PHP Academy topics to give you the knowledge and tips & tricks helpful for both small and large projects.
                    </p>
                </div>
            </div>
            <div className="mb-6">
                <HorizontalTimeline />
                <VerticalTimeline />
            </div>
        </div>
    );
}

export default Timeline;