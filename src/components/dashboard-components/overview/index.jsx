import Audience from "../../charts/Audience/Audience";
import StatesComponent from "../../charts/statesBox/StatesComponent";
import ActivityComponent from "../../charts/ActivityChart/ActivityComponent";
import RevenueComponent from "../../charts/RevenueChart/RevenueComponent";
import OverviewComponent from "../../charts/OverviewChart/OverviewComponent";
import AgeComponent from "../../charts/AgeChart/AgeComponent";
import GenderComponent from "../../charts/GenderCharts/GenderComponent";
import SchedulePosts from "../../charts/SchedulePosts/SchedulePosts";

const Overview = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <StatesComponent />

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <OverviewComponent />
        </div>
        <div className="flex-1 min-w-[300px]">
          <Audience />
        </div>
        <div className="flex-1 min-w-[300px]">
          <RevenueComponent />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <GenderComponent />
        </div>
        <div className="flex-1 min-w-[250px]">
          <AgeComponent />
        </div>
        <div className="flex-1 min-w-[250px]">
          <ActivityComponent />
        </div>
        <div className="flex-1 min-w-[250px]">
          <SchedulePosts />
        </div>
      </div>
    </div>
  );
};

export default Overview;
