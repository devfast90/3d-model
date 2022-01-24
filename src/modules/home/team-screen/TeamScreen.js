import "./TeamScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";

export default function TeamScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".team-screen"
    });

    return (
        <div className={"team-screen"}>
            This is the team screen
        </div>
    );
}
