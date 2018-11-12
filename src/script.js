var states = [
  "Not At Work",
  "Clocked In",
  "Lunch Break"
]
var currentState = states[0];
var hadLunch = false;


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("time_btn").onclick = (e) => { 
    let btn_text = "";
    if(currentState === states[0]){
      //Arrived at work
      currentState = states[1];
      btn_text = "Take Lunch";
      hadLunch = false;
    } else if(currentState === states[1] && hadLunch){
      //Going home
      currentState = states[0];
      btn_text = "Got In";
    } else if(currentState === states[1]){
      //Going out to lunch
      currentState = states[2];
      btn_text = "Lunch Finished";
      hadLunch = true;
    } else {
      //Got back from lunch
      currentState = states[1];
      btn_text = "Go Home";
    }
    console.log(e);
    e.srcElement.innerText = btn_text;
    

  }
});