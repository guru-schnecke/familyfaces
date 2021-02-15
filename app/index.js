import Clock from "../utilz/Clock";
import clock from "clock";
import document from "document";
import { today } from "user-activity";

// console.log((goals.steps || 0) + " steps");
// console.log((today.local.steps || 0) + " steps");

const hrElem = document.getElementById("hour");
const minElem = document.getElementById("min");
const dateElem = document.getElementById("date");

const stepsElem = document.getElementById("steps");
const distanceElem = document.getElementById("distance");
const temperatureElem = document.getElementById("temperature");

const clockTime = new Clock();
// Update the clock every tick event
//time
clock.addEventListener("tick", function () {
  clockTime.updateClock({ hrElem, minElem });
  clockTime.updateDate(dateElem);
});

stepsElem.text = today.local.steps || 0;
distanceElem.text = ((today.local.distance / 1000).toFixed(1) || 0) + "Km";
// temperatureElem.text = today.local.temperature || 0;
