import DashboardNavbar from '../components/dashboard-components/navbar/DashboardNavbar';
import Overview from '../components/dashboard-components/overview';
import Root from '../components/dashboard-components/Root';

const OverviewPage = () => {
  return (
    <Root>
      <div className="flex flex-col w-[1624px] mx-8 gap-5">
        <DashboardNavbar />
        <Overview />
      </div>
    </Root>
  );
};

export default OverviewPage;
