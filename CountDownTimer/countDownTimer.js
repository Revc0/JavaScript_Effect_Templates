let countdown = document.getElementById('countdown');
let targetDate = new Date().getTime() + (10 * 60 * 1000);  // 10 minutes from now

function updateCountdown() {
  let now = new Date().getTime();
  let distance = targetDate - now;
  
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = 'EXPIRED';
  }
}

let interval = setInterval(updateCountdown, 1000);
