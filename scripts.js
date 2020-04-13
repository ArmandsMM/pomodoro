var initialStartTime = 10;
var i = initialStartTime;
var interval;

function count() {
  interval = setInterval(function () {
    var counterDiv = document.getElementById("counter");
    counterDiv.innerHTML = i;
    if (i === 0) {
      i = (showAlert() && initialStartTime) || clearInterval(interval);
      return;
    }
    i--;
  }, 1000);
}

function showAlert() {
  return confirm("time is up!");
}
