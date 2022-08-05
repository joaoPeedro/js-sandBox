clear();

// EX: 1

this;

$0.addEventListener("click", function () {
  console.log(this);
});

// EX: 2

let arrA = [1, 7, 3, 9, 5];
let arrOrd = arrA;
// let arrOrd = arrA.slice();

arrOrd.sort();

console.log("comp1", arrOrd[0] == arrA[0]); // true || false
console.log("comp2", arrOrd[1] == arrA[1]); // true || false

// EX: 3

let arrB = [];

for (var i = 0; i < 10; i++) {
  arrB[i] = () => console.log(i);
}

arrB[3]();
arrB[9]();

let arrC = [];

var t = () => {
  console.log(i);
};

for (var i = 0; i < 10; i++) {
  arrC.push(
    ((j) => {
      return () => console.log(j);
    })(i)
  );
}

arrC[3]();
arrC[9]();
