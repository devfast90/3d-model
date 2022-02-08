import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import PublicSale from "./pages/PublicSale";
import PreSale from "./pages/PreSale";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="model" element={<Model />} />
        <Route path="pre-sale" element={<PreSale />} />
        <Route path="public-sale" element={<PublicSale />} />
      </Routes>
    </>
  );
}
