import './style.css'
import dayjs from 'dayjs'
import { add, subtract } from './math.js'

document.querySelector('#app').innerHTML =
  `
<h1>日期工具</h1>
<p id="dateText"></p>
<button id="refreshButton">刷新时间</button>

`

const dateText = document.getElementById("dateText");
const refreshButton = document.getElementById("refreshButton");
const oneNumber = document.getElementById("oneNumber");
const twoNumber = document.getElementById("twoNumber");
const cutover = document.getElementById("cutover");
const message = document.getElementById("message");
const start = document.getElementById("start");
const symbol = document.getElementById("symbol");

function updateTime() {
  dateText.textContent = dayjs().format("YYYY-MM-DD HH:mm:ss");
}

refreshButton.addEventListener("click", function () {
  updateTime();
});

updateTime();
setInterval(updateTime, 1000);




let cutoverIndex = 0;
symbol.textContent = "+";

cutover.addEventListener("click", function () {
  if (cutoverIndex) { cutoverIndex = 0; symbol.textContent = "+"; }
  else { cutoverIndex = 1; symbol.textContent = "-"; }
});

start.addEventListener("click", function () {
  const a = Number(oneNumber.value.trim());
  const b = Number(twoNumber.value.trim());

  if (cutoverIndex == 0) {
    message.textContent = add(a, b);
  } else {
    message.textContent = subtract(a, b);
  }
});