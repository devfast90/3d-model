import ScrollContainer from "../modules/home/scroll-container/ScrollContainer";
import SquareScreen from "../modules/home/square-screen/SquareScreen";
import ActorScreen from "../modules/home/actor-screen/ActorScreen";
import CircleScreen from "../modules/home/circle-screen/CircleScreen";
import FashionScreen from "../modules/home/fashion-screen/FashionScreen";
import BlackScreen from "../modules/home/black-screen/BlackScreen";
import PhaseScreen from "../modules/home/phase-screen/PhaseScreen";
import TeamScreen from "../modules/home/team-screen/TeamScreen";
import FooterScreen from "../modules/home/footer-screen/FooterScreen";

export default function App() {
    const fashionScreenHeight = '1915px';
    return (
        <>
            <ScrollContainer>
                {/*<ActorScreen scrollContainerHeight={"600vh"}/>*/}
                <SquareScreen scrollContainerHeight={"200vh"}/>
                {/*<CircleScreen/>*/}
                <FashionScreen scrollContainerHeight={fashionScreenHeight} contentHeight={fashionScreenHeight}/>
                <BlackScreen scrollContainerHeight={"600vh"} />
                {/*<PhaseScreen scrollContainerHeight={"200vh"}/>*/}
                {/*<TeamScreen scrollContainerHeight={"200vh"}/>*/}
                {/*<FooterScreen scrollContainerHeight={"100vh"} hideHeaderFooter/>*/}
            </ScrollContainer>
        </>
    );
}
