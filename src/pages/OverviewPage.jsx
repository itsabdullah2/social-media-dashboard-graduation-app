import DashboardNavbar from '../components/dashboard-components/navbar/DashboardNavbar';
import Overview from '../components/dashboard-components/overview';
import Root from '../components/dashboard-components/Root';
import { useAppState } from '../context/AppContext';

const OverviewPage = () => {
  const { isSidebarOpen } = useAppState();

  return (
    <Root>
      <div
        className={`flex flex-col w-[1624px] ${
          isSidebarOpen ? 'mx-auto px-3 md:px-5 xl:px-8' : 'mx-8'
        } gap-5`}
      >
        <DashboardNavbar />
        <Overview />
      </div>
    </Root>
  );
};

export default OverviewPage;
