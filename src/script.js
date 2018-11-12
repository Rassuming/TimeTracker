const moment = require('moment');

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("time_btn");
  let timeText = [
    document.getElementById('clocked_in'),
    document.getElementById('lunch_start'),
    document.getElementById('lunch_end'),
    document.getElementById('clocked_out')
  ]
  let buttonText = [
    "Get In",
    "Take Lunch",
    "Finish Lunch",
    "Go Home"
  ]
  let times = [0,0,0,0];
  let currentState = 0;
  let currentClock = timeText[0];
  btn.innerText = buttonText[currentState];

  setInterval(()=>{
    let totalToday = 0;
    if(times[0]){
      let delta = times[1] ? times[1] : moment(new Date());
      totalToday += delta.diff(times[0], 'seconds');
    } if(times[2]){
      let delta = times[3] ? times[3] : moment(new Date());
      totalToday += delta.diff(times[2], 'seconds');
    } 
    let formatted = moment("2015-01-01").startOf('day').seconds(totalToday).format('H:mm:ss');
    document.getElementById('today_hours').innerText = formatted;
  }, 1000);

  btn.onclick = () => { 
    let now = moment(new Date());
    times[currentState] = now;

    // Calculate Clock Times
    currentClock.innerText = now.format('h:mmA');
    currentClock.parentElement.classList.add('hasTime');
    currentClock = currentState < buttonText.length-1 ? timeText[currentState+1] : timeText[0];

    // Increment Button Text
    btn.innerText = buttonText[ currentState < buttonText.length-1 ? ++currentState : currentState=0 ];

    // Reset Stuff
    if(currentState === 0){
      times = [0,0,0,0];
      timeText.forEach(element => {
        element.innerText = "";
        element.classList.remove('hasTime');
        document.getElementById('week_hours').innerText = document.getElementById('today_hours').innerText;
        document.getElementById('week_hours').innerText = '';
      });
    }
  }
});