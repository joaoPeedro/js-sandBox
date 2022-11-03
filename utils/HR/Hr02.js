function entryTime(s, keypad) {
  //write your code here
  //console.log(s, keypad);

  const keypadK = keypad.split("");

  const lines = [
    keypadK.splice(0, 3),
    keypadK.splice(0, 3),
    keypadK.splice(0, 3),
  ];

  let currentLPosition =
    lines[0].indexOf(s[0]) !== -1 ? 1 : lines[1].indexOf(s[0]) !== -1 ? 2 : 3;
  let currentCPosition = lines[currentLPosition - 1].indexOf(s[0]) + 1;

  let time = 0;

  for (let i = 1; i < s.length; i++) {
    let nextLPosition =
      lines[0].indexOf(s[i]) !== -1 ? 1 : lines[1].indexOf(s[i]) !== -1 ? 2 : 3;
    let nextCPosition = lines[nextLPosition - 1].indexOf(s[i]) + 1;
    // console.log(currentLPosition, nextLPosition)
    time +=
      nextLPosition !== currentLPosition
        ? Math.abs(nextCPosition - currentCPosition) > 1
          ? Math.abs(nextLPosition - currentLPosition) + 1
          : Math.abs(nextLPosition - currentLPosition)
        : Math.abs(nextCPosition - currentCPosition);

    currentLPosition = nextLPosition;
    currentCPosition = nextCPosition;
  }

  return time;
}

console.log(entryTime("923642", "158346729")); // 6
console.log(entryTime("93", "158346729")); // 2

// 158
// 346
// 729
