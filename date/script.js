const formateDate = document.querySelector("#formateDate");
const originalDate = document.querySelector("#originalDate");

let date = "2015-05-01";
originalDate.innerHTML = `<p>${date}</p>`;
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const readableDate = new Date(date).toLocaleDateString("en-GB", options);
formateDate.innerHTML = `<p>${readableDate}</p>`;
console.log(formateDate);
