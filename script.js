const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
  // Array of some colors
  const colors = ['#f44336', '#2196F3', '#ffeb3b', '#9c27b0', '#00bcd4'];

  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Set body background to the random color
  document.body.style.backgroundColor = randomColor;
});
