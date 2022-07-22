import scss from "./styles/App.module.scss";

import Balance from "./components/Balance";
import Spending from "./components/Spending";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <main className={scss.card}>
        <Balance />
        <Spending />
      </main>
      <Attribution />
    </>
  );
}

export default App;
