import scss from "../styles/Spending.module.scss";

import Chart from "./Chart/Chart";

function Spending() {
  return (
    <div className={scss.container}>
      <h1 className={scss.title}>Spending - Last 7 days</h1>
      <Chart />
      <div className={scss.summary}>
        <div>
          <p className={scss.caption}>Total this month</p>
          <p className={scss.total}>$478.33</p>
        </div>
        <div>
          <p className={scss.percentage}>+2.4%</p>
          <p className={scss.caption}>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Spending;
