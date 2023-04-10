import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <h2> Today's Forecast</h2>
        <footer> <a href="https://github.com/Cute-Bologna/week4reactweather.git" target="_blank">Open Souce Code by Cute_Bologna</a></footer>
      </div>
    </div>
    <Weather />
  </StrictMode>
);
