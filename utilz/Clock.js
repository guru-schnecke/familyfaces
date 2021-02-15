import clock from "clock";
import { preferences } from "user-settings";

export const zeroPad = (n) => {
  return n < 10 ? "0" + n : n;
};

class Clock {
  constructor() {
    clock.granularity = "minutes";
    this.month = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
  }

  updateClock = ({ hrElem, minElem }) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const twelveHour = preferences.clockDisplay === "12h";
    let amPm = "";
    if (twelveHour) {
      amPm = hours > 12 ? "." : "";
      hours = hours % 12 || 12;
    }

    hrElem.text = `${zeroPad(hours)}`;
    minElem.text = `${zeroPad(minutes)}`;
  };

  updateDate = (elem) => {
    const date = new Date();
    elem.text = `${this.month[date.getMonth()]} ${date.getDate()}`;
  };
}

export default Clock;
