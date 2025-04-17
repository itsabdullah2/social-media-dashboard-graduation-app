import DashboardNavbar from '../components/dashboard-components/DashboardNavbar';
import Overview from '../components/dashboard-components/overview';
import Sidebar from '../components/dashboard-components/Sidebar';
import { useAppState } from '../context/AppContext';

const OverviewPage = () => {
  const { isDarkMode } = useAppState();

  return (
    <main className={`flex ${isDarkMode ? 'bg-navy' : 'bg-light'}`}>
      <Sidebar />
      <div className="flex flex-col w-[1624px] mx-8 gap-5">
        <DashboardNavbar />
        <Overview />
      </div>
    </main>
  );
};

export default OverviewPage;
