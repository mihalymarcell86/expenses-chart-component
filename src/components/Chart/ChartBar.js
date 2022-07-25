import scss from "../../styles/ChartBar.module.scss";

function ChartBar(props) {
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
    >
      <div className={scss.tooltip}>${props.data.amount}</div>
    </div>
  );
}

export default ChartBar;
