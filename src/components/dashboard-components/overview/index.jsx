import Audience from '../charts/Audience/Audience';
import StatesComponent from '../charts/statesBox/StatesComponent';
import ActivityComponent from '../charts/ActivityChart/ActivityComponent';
import RevenueComponent from '../charts/RevenueChart/RevenueComponent';
import OverviewComponent from '../charts/overviewChart/OverviewComponent';
import AgeComponent from '../charts/AgeChart/AgeComponent';
import GenderComponent from '../charts/GenderCharts/GenderComponent';
import ShedulePosts from '../charts/SchedulePosts/ShedulePosts';

const Overview = () => {
  return (
    <div>
      <div className="container">
        <StatesComponent />
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4 my-[1rem]">
          <OverviewComponent />

          <Audience />

          <RevenueComponent />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-[1rem]">
          <GenderComponent />

          <AgeComponent />

          <ActivityComponent />

          <ShedulePosts />
        </div>
      </div>
    </div>
  );
};

export default Overview;
