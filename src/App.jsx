import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<OverviewPage />} />
    </Routes>
  );
}

export default App;
