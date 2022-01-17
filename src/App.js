import "./App.css";
import Header from "./modules/layout/header/Header";
import SideText from "./modules/layout/side-text/SideText";
import Footer from "./modules/layout/footer/Footer";
import ScrollContainer from "./modules/home/components/scroll-container/ScrollContainer";
import SquareWithTextScreen from "./modules/home/components/square-with-text-screen/SquareWithTextScreen";
import SquareWithVideoScreen from "./modules/home/components/square-with-video-screen/SquareWithVideoScreen";
import StickyView from "./modules/home/components/sticky-view/StickyView";
import ActorScreen from "./modules/home/components/actor-screen/ActorScreen";

export default function App() {
  return (
    <div className="App">
        <Header />
        <SideText />
        <Footer />
        <ScrollContainer>
            <ActorScreen />
            <SquareWithTextScreen />
            <SquareWithVideoScreen />
        </ScrollContainer>
      {/*<Routes>*/}
      {/*  <Route index element={<PreSale />} />*/}
      {/*  <Route path="pre-sale" element={<PreSale />} />*/}
      {/*</Routes>*/}
    </div>
  );
}
