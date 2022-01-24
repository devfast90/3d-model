import SideText from "../layout/side-text/SideText";
import Footer from "../layout/footer/Footer";
import ScrollContainer from "../modules/home/scroll-container/ScrollContainer";
import SquareScreen from "../modules/home/square-screen/SquareScreen";
import ActorScreen from "../modules/home/actor-screen/ActorScreen";
import CircleScreen from "../modules/home/circle-screen/CircleScreen";
import FashionScreen from "../modules/home/fashion-screen/FashionScreen";
import BlackScreen from "../modules/home/black-screen/BlackScreen";
import PhaseScreen from "../modules/home/phase-screen/PhaseScreen";
import Header from "../layout/header/Header";

export default function App() {
    return (
        <>
            <Header/>
            <SideText/>
            <Footer/>
            <ScrollContainer>
                {/*<ActorScreen scrollContainerHeight={"600vh"}/>*/}
                {/*<SquareScreen/>*/}
                {/*<CircleScreen/>*/}
                {/*<FashionScreen scrollContainerHeight={"600vh"}/>*/}
                <BlackScreen scrollContainerHeight={"600vh"}/>
                {/*contentHeight={1038}*/}
                <PhaseScreen scrollContainerHeight={"600vh"}/>
                <CircleScreen/>
            </ScrollContainer>
        </>
    );
}
