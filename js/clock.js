function setTime() {
  const time = document.querySelector(".top .time");
  const today = document.querySelector(".top .day");
  const date = new Date();

  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  time.innerText = `${hour} : ${min}`;
  today.innerText = `${month} ${day}, ${year}`;
}

setInterval(setTime, 1000);
