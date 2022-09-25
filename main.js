const clockContainer = document.querySelector(".clock-container");
const dateContainer = document.querySelector(".date-container");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const initialize = () => {
  const currentTimeObj = new Date();
  clockContainer.innerHTML = currentTimeObj.toLocaleTimeString();
  dateContainer.innerHTML = currentTimeObj
    .toString()
    .split(" ")
    .slice(0, 3)
    .join(" ");
  searchInput.value = "";
  searchInput.focus();

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (searchInput.value) {
      window.location.href =
        "https://www.google.com/search?q=" + searchInput.value;
    }
  });
};

const getFormattedTime = (currentTimeObj) => {
  // config
  const timeFormat12Hours = true;

  let currentTimeStr = "";

  const hours = timeFormat12Hours
    ? currentTimeObj.getHours() % 12 || 12
    : currentTimeObj.getHours();
  const ampm = currentTimeObj.getHours() > 12 ? "PM" : "AM";
  const minutes = currentTimeObj.getMinutes();
  const seconds =
    ("" + currentTimeObj.getSeconds()).length === 1
      ? "0" + currentTimeObj.getSeconds()
      : currentTimeObj.getSeconds();
  currentTimeStr = timeFormat12Hours
    ? `${hours}:${minutes}:${seconds} ${ampm}`
    : `${hours}:${minutes}:${seconds}`;
  return currentTimeStr;
};

// initialize

initialize();

setInterval(() => {
  const currentTimeObj = new Date();
  clockContainer.innerHTML = currentTimeObj.toLocaleTimeString();
  dateContainer.innerHTML = currentTimeObj
    .toString()
    .split(" ")
    .slice(0, 3)
    .join(" ");
}, 1000);
