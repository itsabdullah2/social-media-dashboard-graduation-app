import { Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';
import SchedulePage from './pages/SchedulePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<OverviewPage />} />
      <Route path="/dashboard/schedule" element={<SchedulePage />} />
      <Route path="/dashboard/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
