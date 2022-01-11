import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreSale from "./pages/LandingScene";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PreSale />} />
        <Route path="pre-sale" element={<PreSale />} />
      </Routes>
    </div>
  );
}
