const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var number = Math.floor(Math.random() * 10 + 1);

    number > 5
      ? resolve({number: number, user: "user data"})
      : reject(new Error(number + " - error to get user data"));
  }, 800);
});

const simplePromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    var number = Math.floor(Math.random() * 10 + 1);

    number > 5
      ? resolve({number: number, user: "user data 2"})
      : reject(new Error(number + " - error to get user data 2"));
  }, 800);
});

const complexPromise = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      number < 5
        ? resolve({number: number, user: "user complexPromise"})
        : reject(new Error(number + " - error to get user complexPromise"));
    }, 1200);
  });
};

console.log("promise init");
document.querySelector("#promiseInit").innerHTML = "<p>promise init</p>";

simplePromise
  .then((user) => {
    document.querySelector(
      "#simplePromise"
    ).innerHTML = `<p>simplePromise ${user.number} - ${user.user}`;
  })
  .catch((err) => {
    document.querySelector(
      "#simplePromise"
    ).innerHTML = `<p>simplePromise ${err.message}`;
  });

complexPromise(Math.floor(Math.random() * 10 + 1))
  .then((user) => {
    document.querySelector(
      "#complexPromise"
    ).innerHTML = `<p>complexPromise ${user.number} - ${user.user}`;
  })
  .catch((err) => {
    document.querySelector(
      "#complexPromise"
    ).innerHTML = `<p>complexPromise ${err.message}`;
  });

Promise.all([simplePromise, simplePromise2])
  .then((result) => {
    document.querySelector(
      "#PromiseAll"
    ).innerHTML = `<p>Promise.all ${user.number} - ${user.user}`;
  })
  .catch((err) => {
    document.querySelector(
      "#PromiseAll"
    ).innerHTML = `<p>Promise.all ${err.message}`;
  });

document.querySelector("#promiseEnd").innerHTML = "<p>promise end</p>";

console.log("end");
