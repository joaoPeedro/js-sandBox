//sync function
const someFunction = () => {
  console.log("between");
};

document.querySelector("#rootCallbackInit").innerHTML =
  "<p>callback js init</p>";

someFunction();

//Async DOM function with callback
setTimeout(() => {
  document.querySelector("#rootCallback").innerHTML =
    "<p>callback in time out</p>";
}, 2000);

document.querySelector("#rootCallbackEnd").innerHTML = "<p>callback js end</p>";
