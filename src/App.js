import "./App.css";
import Header from "./modules/layout/header/Header";
import SideText from "./modules/layout/side-text/SideText";
import Footer from "./modules/layout/footer/Footer";
import ScrollContainer from "./modules/home/components/scroll-container/ScrollContainer";
import SquareScreen from "./modules/home/components/square-screen/SquareScreen";
import ActorScreen from "./modules/home/components/actor-screen/ActorScreen";
import CircleScreen from "./modules/home/components/circle-screen/CircleScreen";

export default function App() {
  return (
    <div className="App">
        <Header />
        <SideText />
        <Footer />
        <ScrollContainer>
            <ActorScreen scrollContainerHeight={'600vh'}/>
            <SquareScreen />
            <CircleScreen />
        </ScrollContainer>
      {/*<Routes>*/}
      {/*  <Route index element={<PreSale />} />*/}
      {/*  <Route path="pre-sale" element={<PreSale />} />*/}
      {/*</Routes>*/}
    </div>
  );
}
