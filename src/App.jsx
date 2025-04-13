import { Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';

function App() {
  const content = (
    <>
      <div>Welcome to the home page</div>
    </>
  );

  return (
    <Routes>
      <Route path="/" element={content} />
      <Route path="/dashboard" element={<OverviewPage />} />
    </Routes>
  );
}

export default App;
