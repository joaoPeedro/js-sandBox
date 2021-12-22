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

const formateDate2 = document.querySelector("#formateDate2");
const originalDate2 = document.querySelector("#originalDate2");

let date2 = "2021-11-27 00:00:00";
originalDate2.innerHTML = `<p>${date2}</p>`;
var options2 = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const readableDate2 = new Date(date2).toLocaleDateString("pt-PT", options2);
formateDate2.innerHTML = `<p>${readableDate2.replace(/ de /g, " ")}</p>`;

console.log(formateDate2);
