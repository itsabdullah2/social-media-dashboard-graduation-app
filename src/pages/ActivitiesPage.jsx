import { LuSettings } from 'react-icons/lu';
import DashboardNavbar from '../components/dashboard-components/navbar/DashboardNavbar';
import Root from '../components/dashboard-components/Root';

const ActivitiesPage = () => {
  return (
    <Root>
      <div
        className={`flex-1 flex flex-col max-w-[1624px] mx-auto px-3 md:px-5 xl:px-8 gap-5 relative`}
      >
        <DashboardNavbar />
        <div className="flex items-center justify-center absolute left-0 top-0 w-full h-full">
          <span className="text-white text-large font-medium z-20 flex items-center gap-2">
            <LuSettings className="animate-spin [animation-duration:2s]" />
            In Progress
          </span>
          <span className="bg-black w-full h-full left-0 top-0 absolute opacity-85 z-10" />
        </div>
      </div>
    </Root>
  );
};

export default ActivitiesPage;
