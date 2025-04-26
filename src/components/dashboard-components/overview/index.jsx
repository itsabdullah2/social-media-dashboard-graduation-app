import Audience from '../../charts/Audience/Audience';
import StatesComponent from '../../charts/statesBox/StatesComponent';
import ActivityComponent from '../../charts/ActivityChart/ActivityComponent';
import RevenueComponent from '../../charts/RevenueChart/RevenueComponent';
import OverviewComponent from '../../charts/overviewChart/OverviewComponent';
import AgeComponent from '../../charts/AgeChart/AgeComponent';
import GenderComponent from '../../charts/GenderCharts/GenderComponent';
import ShedulePosts from '../../charts/SchedulePosts/ShedulePosts';

const Overview = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <StatesComponent />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-4">
        <OverviewComponent />
        <Audience />
        <RevenueComponent />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <GenderComponent />
        <AgeComponent />
        <ActivityComponent />
        <ShedulePosts />
      </div>
    </div>
  );
};

export default Overview;
