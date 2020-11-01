const getInfoFromDBA = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getInfoFromDB", user);
      resolve({userID: user});
    }, 800);
  });
};

const getInfoFromDBEmailListA = (userID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["userEmail_1@gmail", "userEmail_2@gmail"]);
    }, 1200);
  });
};

const displayData = async () => {
  const userInfo = await getInfoFromDBA("newuser");
  const userEmailList = await getInfoFromDBEmailListA(userInfo.userID);
  return userEmailList;
};

console.log("Async await init");
document.querySelector("#asyncAwaitInit").innerHTML = `<p>asyncAwait init</p>`;

displayData().then((result) => {
  console.log(result);
  document.querySelector(
    "#asyncAwait"
  ).innerHTML = `<p>asyncAwait ${result}</p>`;
});

document.querySelector("#asyncAwaitEnd").innerHTML = `<p>asyncAwait end</p>`;
console.log("end");
