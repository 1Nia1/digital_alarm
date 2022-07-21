// global object
T = {} ;
T.timerDiv = document.getElementById('timer');

function displayTimer() {
  // initilized all local variables:
  var centiseconds=0, seconds='00',
  time = '',
  timeNow = new Date().getTime(); // timestamp (centiseconds)

  T.difference = timeNow - T.timerStarted;

  // milliseconds
  if(T.difference > 10) {
    centiseconds = Math.floor((T.difference % 1000) / 10);
    if(centiseconds < 10) {
      centiseconds = '0'+String(centiseconds);
    }
  }
  // seconds
  if(T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000);
    if (seconds > 999) {
      seconds = seconds % 999;
    }
    if(seconds < 10) {
      seconds = '0'+String(seconds);
    }
  }

  

  
  time = '0'+ seconds + ':'
  time += centiseconds;

  T.timerDiv.innerHTML = time;
}

function startTimer() {
  // save start time
  T.timerStarted = new Date().getTime()
  console.log('T.timerStarted: '+T.timerStarted)

  if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
  }
  // update timer periodically
  T.timerInterval = setInterval(function() {
    displayTimer()
  }, 10);

  // show / hide the relevant buttons:
  document.getElementById('go');

}

function stopTimer() {
  clearInterval(T.timerInterval); // stop updating the timer

  document.getElementById('stop');
 
}

function clearTimer() {
  clearInterval(T.timerInterval);
  T.timerDiv.innerHTML = "000:00"; // reset timer to all zeros
  T.difference = 0;

  document.getElementById('clear');
}
