const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

const dateContainer = document.querySelector(".date");
const dayContainer = document.querySelector(".day");

function setDate() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const now = new Date();

  const date = now.getDate();
  const day = now.getDay();

  dateContainer.innerHTML = date;
  dayContainer.innerHTML = days[day];

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360;
  const hoursDegrees = 30 * hours + minutes / 2;

  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
