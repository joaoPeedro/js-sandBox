/**
 * to order JSON
 */

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

const sortByName = items.sort(function (a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

document.querySelector("#sortByName").innerHTML = JSON.stringify(sortByName);

//ascend
// const sortByValue = items.sort((a, b) => a.value - b.value);
//discend
const sortByValue = items.sort((a, b) => b.value - a.value);

document.querySelector("#sortByValue").innerHTML = JSON.stringify(sortByValue);

/**
 * TimeOut
 */

let timer;
let time = 0;

timer = setTimeout(() => {
  document.querySelector("#timer").innerHTML = time + 1;
  //clear TimeOut
  clearTimeout(timer);
}, 1000);

/**
 * SetInterval
 */

let timerSetInterval;
let timeSetInterval = 0;

timerSetInterval = setInterval(() => {
  timeSetInterval++;
  document.querySelector("#timerSetInterval").innerHTML = timeSetInterval;
  //clear TimeOut
  if (timeSetInterval > 10) {
    clearInterval(timerSetInterval);
  }
}, 1000);
