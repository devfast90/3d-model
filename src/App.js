import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreSale from "./pages/LandingScene";
import ActorScreen from "./modules/home/components/actor-screen/actor-screen";
import SquareWithTextScreen from "./modules/home/components/square-with-text-screen/SquareWithTextScreen";
import SquareWithVideoScreen from "./modules/home/components/square-with-video-screen/SquareWithVideoScreen";
import Header from "./modules/layout/header/Header";
import SideText from "./modules/layout/side-text/SideText";
import Footer from "./modules/layout/footer/Footer";

export default function App() {
  return (
    <div className="App">
        <Header />
        <SideText />
        <Footer />
      {/*<Routes>*/}
      {/*  <Route index element={<PreSale />} />*/}
      {/*  <Route path="pre-sale" element={<PreSale />} />*/}
      {/*</Routes>*/}
        <ActorScreen/>
        {/*  <SquareWithTextScreen />*/}
        {/*<SquareWithVideoScreen />*/}
    </div>
  );
}
