import './style.css'
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
<h1>日期工具</h1>
<p id="dateText"></p>
<button id="refreshButton">刷新时间</button>
`

const dateText = document.getElementById("dateText");
const refreshButton = document.getElementById("refreshButton");

function updateTime(){
  dateText.textContent = dayjs().format("YYYY-MM-DD HH:mm:ss");
}

refreshButton.addEventListener("click",function(){
  updateTime();
});

updateTime();
setInterval(updateTime,1000);