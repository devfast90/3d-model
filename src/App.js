import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreSale from "./pages/LandingScene";
import Screen3 from "./modules/home/components/screen-3/Screen3";

export default function App() {
  return (
    <div className="App">
      {/*<Routes>*/}
      {/*  <Route index element={<PreSale />} />*/}
      {/*  <Route path="pre-sale" element={<PreSale />} />*/}
      {/*</Routes>*/}
        <Screen3/>
    </div>
  );
}
