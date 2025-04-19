import React from "react";
import StatsBox from "./StatsBox";
const followerData = [
  { value: 10 },
  { value: 15 },
  { value: 13 },
  { value: 18 },
  { value: 20 },
  { value: 25 },
  { value: 22 },
  { value: 28 },
  { value: 30 },
  { value: 26 },
  { value: 32 },
  { value: 35 },
];
const revenueData = [
  { value: 5 },
  { value: 8 },
  { value: 6 },
  { value: 10 },
  { value: 9 },
  { value: 12 },
  { value: 15 },
  { value: 14 },
  { value: 18 },
  { value: 20 },
  { value: 19 },
  { value: 22 },
];
const errorData = [
  { value: 3 },
  { value: 2 },
  { value: 4 },
  { value: 3 },
  { value: 5 },
  { value: 4 },
  { value: 6 },
  { value: 5 },
  { value: 7 },
  { value: 6 },
  { value: 8 },
  { value: 9 },
];
const sharesData = [
  { value: 3 },
  { value: 2 },
  { value: 4 },
  { value: 3 },
  { value: 5 },
  { value: 4 },
  { value: 6 },
  { value: 5 },
  { value: 7 },
  { value: 6 },
  { value: 8 },
  { value: 9 },
];

function StatesComponent() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 gap-4 my-[1rem]">
        <StatsBox
          title="Followers"
          number="19 654"
          percentage="- 5%"
          percentageColor="#ff0000"
          chartData={followerData}
        />
        <StatsBox
          title="Likes"
          number="4 820"
          percentage="+ 12%"
          percentageColor="#34d399"
          chartData={revenueData}
        />
        <StatsBox
          title="Comments"
          number="5 541"
          percentage="+ 2%"
          percentageColor="#34d399"
          chartData={errorData}
        />
        <StatsBox
          title="Shares"
          number="1 234"
          percentage="+ 8%"
          percentageColor="#34d399"
          chartData={sharesData}
        />
      </div>
    </div>
  );
}

export default StatesComponent;
