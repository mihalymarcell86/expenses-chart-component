import scss from "../../styles/Chart.module.scss";
import data from "../../data/data.json";

import ChartBar from "./ChartBar";

function Chart() {
  const maxSpend = data.reduce(
    (acc, item) => (+item.amount > acc ? +item.amount : acc),
    0
  );

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const chartedData = data.map((item, index) => (
    <ChartBar key={item.day} data={item} max={maxSpend} day={days[index]} />
  ));

  const abbrDays = days.map((day) => (
    <div className={scss.day} aria-hidden="true">
      <abbr title={day}>{day.slice(0, 3).toLowerCase()}</abbr>
    </div>
  ));

  return (
    <div className={scss.chart}>
      {chartedData}
      {abbrDays}
    </div>
  );
}

export default Chart;
