var countDownDate = new Date("May 5, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerText = days;
  document.querySelector(".hours").innerText = hours;
  document.querySelector(".minutes").innerText = minutes;
  document.querySelector(".seconds").innerText = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("timer").innerHTML = "WE'RE LAUNCHING NOW";
  }
}, 1000);
