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
                setSwitch1(true);
              }}
              style={{
                backgroundColor:
                  switch1 === true ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch1 === true ? "white" : "black",
              }}
              className="on"
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch2(true);
              }}
              style={{
                backgroundColor:
                  switch2 === true ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch2 === true ? "white" : "black",
              }}
              className="on"
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(true);
              }}
              style={{
                backgroundColor:
                  switch3 === true ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch3 === true ? "white" : "black",
              }}
              className="on"
            >
              ON
            </button>
          </div>

          <div className="btnOFF">
            <button
              onClick={() => {
                setSwitch1(false);
              }}
              style={{
                backgroundColor:
                  switch1 === false ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch1 === false ? "white" : "black",
              }}
              className="off"
            >
              OFF
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
              style={{
                backgroundColor:
                  switch2 === false ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch2 === false ? "white" : "black",
              }}
              className="off"
            >
              OFF
            </button>
            <button
              onClick={() => {
                setSwitch3(false);
              }}
              style={{
                backgroundColor:
                  switch3 === false ? "#5C48D2" : "rgb(229, 229, 229)",
                color: switch3 === false ? "white" : "black",
              }}
              className="off"
            >
              OFF
            </button>
          </div>
          <span
            style={{
              background:
                switch1 === true && switch2 === true && switch3 === true
                  ? "green"
                  : "salmon",
            }}
            className="noWay"
          >
            {switch1 === true && switch2 === true && switch3 === true
              ? "GO!"
              : "NO WAY!"}
          </span>
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Mariia MERCIER</span>
        </p>
      </footer>
    </>
  );
}

export default App;
