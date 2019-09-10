var count = 4;
var redirect = "http://portfolio.bernardoayala.com"

function countDown() {
  var timer = document.getElementById("timer")
  if (count > 0) {
    count --
    timer.innerHTML = "You will be redirected in "+count+"s..."
    setTimeout("countDown()", 1000)
  } else {
    window.location=redirect
  }
}

countDown()