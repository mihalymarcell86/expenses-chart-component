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

  return (
    <div className={scss.chart}>
      {chartedData}
      <div className={scss.day}>
        <abbr aria-label="Monday">mon</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Tuesday">tue</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Wednesday">wed</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Thursday">thu</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Friday">fri</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Saturday">sat</abbr>
      </div>
      <div className={scss.day}>
        <abbr aria-label="Sunday">sun</abbr>
      </div>
    </div>
  );
}

export default Chart;
