import src_logo from "../images/logo.svg";
import scss from "../styles/Balance.module.scss";

function Balance() {
  return (
    <div className={scss.container}>
      <div>
        <div className={scss.label}>My balance</div>
        <div className={scss.amount}>$921.48</div>
      </div>
      <img src={src_logo} alt="app logo" className={scss.logo} />
    </div>
  );
}

export default Balance;
