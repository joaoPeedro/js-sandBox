/**
 * to order JSON
 */

const items = [
  {name: "Edward", value: 21},
  {name: "Sharpe", value: 37},
  {name: "And", value: 45},
  {name: "The", value: -12},
  {name: "Magnetic", value: 13},
  {name: "Zeros", value: 37},
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

/**
 * PadStart
 */

const str1 = "5";
console.log(str1.padStart(2, "0"));
// expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log({maskedNumber});
// expected output: "************5581"

/**
 * Functions that returns methods
 */

function test() {
  let array = [];
  var obj = {
    add: (item) => (array.push(item)),
    remove: (item) => delete array[array.findIndex((str) => str === item)],
    getList: () => array.toString(),
  };

  return obj;
}

function test2() {
  let array = [];
  var obj = {
    add: (item) => (array = [...array, item]),
    remove: (item) =>
      array.splice(
        array.indexOf(item),
        1
      ),
    getList: () => array.toString(),
  };

  return obj;
}

let obj = test();
obj.add("batatas");
obj.add("cenas");
obj.add("coisas");
obj.remove("batatas");
console.log({objTest : obj.getList()});

let obj2 = test2();
obj2.add("batatas");
obj2.add("cenas");
obj2.add("coisas");
obj2.remove("batatas");
console.log({obj2Test : obj2.getList()});

//load Images
const frameCount = 62;
const currentFrame = (index) =>
  `https://conteudos.meo.pt/Style%20Library/Brand/resources/images/apps/5G/videos/pic/take5g${(
    index + 1
  )
    .toString()
    .padStart(5, "0")}.jpg`;

const images = [];
const videoTake5g = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
