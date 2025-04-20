import DashboardNavbar from '../components/dashboard-components/navbar/DashboardNavbar';
import Schedule from '../components/dashboard-components/schedule';
import Root from '../components/dashboard-components/Root';

const SchedulePage = () => {
  return (
    <Root>
      <div
        className={`flex flex-col w-full max-w-[1624px] mx-auto px-3 md:px-5 xl:px-8 gap-5`}
      >
        <DashboardNavbar />
        <Schedule />
      </div>
    </Root>
  );
};

export default SchedulePage;
