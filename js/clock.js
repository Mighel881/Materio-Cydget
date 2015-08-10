var poll = setInterval(timer,1);

function timer() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  
  var hourObj = document.getElementById("hour");
  var minObj = document.getElementById("min");
  var secObj = document.getElementById("sec");
  
  var hourText = document.getElementById("h-text");
  var minText = document.getElementById("m-text");
  var secText = document.getElementById("s-text");
  
  hourObj.style.width = hour + 10 + "%";
  minObj.style.width = min + 10 + "%";
  secObj.style.width = sec + 10 + "%";
  
  if (hour >= 13) {
    hour -= 12
  }
  if (hour === 0) {
    hour = 12
  }
  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  
  hourText.innerHTML = hour;
  minText.innerHTML = min;
  secText.innerHTML = sec;

  
  }
}