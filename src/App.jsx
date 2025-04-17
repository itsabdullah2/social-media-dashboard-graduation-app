import { Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<OverviewPage />} />
      <Route path="/dashboard/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
