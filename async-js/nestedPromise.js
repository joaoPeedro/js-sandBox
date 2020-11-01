const getInfoFromDBN = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("nested promise", user);
      resolve({userID: user});
    }, 800);
  });
};

const getInfoFromDBEmailListN = (userID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["userEmail_1@gmail", "userEmail_2@gmail"]);
    }, 1200);
  });
};

console.log("nested promise init");
document.querySelector(
  "#nestedPromiseInit"
).innerHTML = `<p>nested promise init</p>`;

getInfoFromDBN("newuser")
  .then((user) => getInfoFromDBEmailListN(user.userID))
  .then((emailList) => {
    console.log(emailList);
    document.querySelector(
      "#nestedPromise"
    ).innerHTML = `<p>nested promise ${emailList}</p>`;
  });

document.querySelector(
  "#nestedPromiseEnd"
).innerHTML = `<p>nested promise end</p>`;
console.log("nested promise end");
