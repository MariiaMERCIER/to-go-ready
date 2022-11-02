import "./App.css";
import react from "./assets/images/react.png";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="enTete">
            <img className="logo" src={react} alt="logo" />
            <h1>Ready To Go</h1>
          </div>
        </div>
      </header>
      <main className="containerMain">
        <div className="form">
          <div className="btnON">
            <button className="on">ON</button>
            <button className="on">ON</button>
            <button className="on">ON</button>
          </div>
          <div className="btnOFF">
            <button className="off">OFF</button>
            <button className="off">OFF</button>
            <button className="off">OFF</button>
          </div>

          <button className="noWay">NO WAY!</button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
