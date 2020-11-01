// Async function with callback
const getInfoFromDB = (user, callBack) => {
  setTimeout(() => {
    console.log(user);
    callBack({userID: user});
  }, 800);
};

const getInfoFromDBEmailList = (userID, callBack) => {
  setTimeout(() => {
    callBack(["userEmail_1@gmail", "userEmail_2@gmail"]);
  }, 1200);
};

console.log("init nestedCallback");

document.querySelector("#nestedCallbackInit").innerHTML =
  "<p>nestedCallback js init</p>";

const user = getInfoFromDB("newuser", (user) => {
  getInfoFromDBEmailList(user.userID, (emailList) => {
    console.log(emailList);
    document.querySelector(
      "#nestedCallback"
    ).innerHTML = `<p>nestedCallback js ${emailList}</p>`;
  });
});

document.querySelector("#nestedCallbackEnd").innerHTML =
  "<p>nestedCallback js end</p>";

console.log("end nestedCallback");
