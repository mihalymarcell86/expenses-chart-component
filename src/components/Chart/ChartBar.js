import { useState } from "react";
import scss from "../../styles/ChartBar.module.scss";

function ChartBar(props) {
  const [showTooltip, setShowTooltip] = useState(false);

  const barHeight = (props.data.amount / props.max) * 100 + "%";
  const today = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    new Date()
  );

  return (
    <div
      className={props.data.day === today.toLowerCase() ? scss.today : scss.bar}
      style={{ height: barHeight }}
      aria-label={`${props.day}: $${props.data.amount}`}
      tabIndex="0"
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      {showTooltip && <div className={scss.tooltip}>${props.data.amount}</div>}
    </div>
  );
}

export default ChartBar;
