import src_logo from "../images/logo.svg";
import scss from "../styles/Balance.module.scss";

function Balance() {
  return (
    <div className={scss.container}>
      <div>
        <p className={scss.caption}>My balance</p>
        <p className={scss.amount}>$921.48</p>
      </div>
      <img src={src_logo} alt="app logo" className={scss.logo} />
    </div>
  );
}

export default Balance;
