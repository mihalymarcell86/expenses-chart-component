import scss from "../../styles/Chart.module.scss";
import data from "../../data/data.json";

import ChartBar from "./ChartBar";

function Chart() {
  const maxSpend = data.reduce(
    (acc, item) => (+item.amount > acc ? +item.amount : acc),
    0
  );

  const chartedData = data.map((item) => (
    <ChartBar key={item.day} data={item} max={maxSpend} />
  ));

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => (
    <div className={scss.day}>
      <abbr aria-label={day}>{day.slice(0, 3).toLowerCase()}</abbr>
    </div>
  ));

  return (
    <div className={scss.chart}>
      {chartedData}
      {days}
    </div>
  );
}

export default Chart;
