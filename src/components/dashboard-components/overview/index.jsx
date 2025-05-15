import Audience from '../../charts/Audience/Audience';
import StatesComponent from '../../charts/statesBox/StatesComponent';
import ActivityComponent from '../../charts/ActivityChart/ActivityComponent';
import RevenueComponent from '../../charts/RevenueChart/RevenueComponent';
import OverviewComponent from '../../charts/OverviewChart/OverviewComponent';
import AgeComponent from '../../charts/AgeChart/AgeComponent';
import GenderComponent from '../../charts/GenderCharts/GenderComponent';
import SchedulePosts from '../../charts/SchedulePosts/SchedulePosts';

const Overview = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 px-2 sm:px-4">
      <StatesComponent />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="w-full">
          <OverviewComponent />
        </div>
        <div className="w-full">
          <Audience />
        </div>
        <div className="w-full">
          <RevenueComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="w-full">
          <GenderComponent />
        </div>
        <div className="w-full">
          <AgeComponent />
        </div>
        <div className="w-full">
          <ActivityComponent />
        </div>
        <div className="w-full">
          <SchedulePosts />
        </div>
      </div>
    </div>
  );
};

export default Overview;
