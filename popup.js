function startSpinning() {
  const wheel = document.getElementById('wheel');
  const spinButton = document.getElementById('spinButton');
  const result = document.getElementById('result');

  spinButton.disabled = true;
  result.textContent = '';

  const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 4 seconds
  const randomResult = Math.random() < 0.6 ? 'YES' : 'NO'; // Randomly choose between YES or NO

  wheel.style.animationPlayState = 'running'; // Start the rotation animation

  setTimeout(() => {
    wheel.style.animationPlayState = 'paused'; // Pause the rotation animation
    setTimeout(() => {
      result.textContent = randomResult;
      spinButton.disabled = false;
    }, 500);
  }, randomTime);

  spinButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', () => {
  const spinButton = document.getElementById('spinButton');
  spinButton.addEventListener('click', startSpinning);
});
