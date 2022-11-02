import "./App.css";
import react from "./assets/images/react.png";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

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
            <button
              onClick={() => {
                switch1 === false && setSwitch1(!switch1);
              }}
              style={{
                backgroundColor: switch1 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="on"
            >
              ON
            </button>
            <button
              onClick={() => {
                switch2 === false && setSwitch2(!switch2);
              }}
              style={{
                backgroundColor: switch2 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="on"
            >
              ON
            </button>
            <button
              onClick={() => {
                switch3 === false && setSwitch3(!switch3);
              }}
              style={{
                backgroundColor: switch3 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="on"
            >
              ON
            </button>
          </div>

          <div className="btnOFF">
            <button
              onClick={() => {
                switch1 === true && setSwitch1(!switch1);
              }}
              style={{
                backgroundColor: switch1 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="off"
            >
              OFF
            </button>
            <button
              onClick={() => {
                switch2 === true && setSwitch2(!switch2);
              }}
              style={{
                backgroundColor: switch2 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="off"
            >
              OFF
            </button>
            <button
              onClick={() => {
                switch3 === true && setSwitch3(!switch3);
              }}
              style={{
                backgroundColor: switch3 ? "#5C48D2" : "rgb(229, 229, 229)",
              }}
              className="off"
            >
              OFF
            </button>
          </div>

          <button className="noWay">NO WAY!</button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
