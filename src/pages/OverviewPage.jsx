import DashboardNavbar from '../components/dashboard-components/navbar/DashboardNavbar';
import Overview from '../components/dashboard-components/overview';
import Root from '../components/dashboard-components/Root';

const OverviewPage = () => {
  return (
    <Root>
      <div
        className={`flex-1 flex flex-col max-w-[1624px] mx-auto px-3 md:px-5 xl:px-8 gap-5`}
      >
        <DashboardNavbar />
        <Overview />
      </div>
    </Root>
  );
};

export default OverviewPage;
