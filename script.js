const startBtn = document.getElementById('start-btn');
const shapesContainer = document.getElementById('shapes-container');

const shapes = ['circle', 'triangle', 'square'];

// On click, animate multiple shapes floating up randomly
startBtn.addEventListener('click', () => {
  // Create 30 shapes with random start positions and delays
  for (let i = 0; i < 30; i++) {
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = document.createElement('div');
    shape.classList.add('shape', shapeType);

    // Random horizontal start position
    shape.style.left = Math.random() * 100 + 'vw';

    // Random animation delay so they float asynchronously
    shape.style.animationDelay = (Math.random() * 8) + 's';

    // Random animation duration for more natural effect
    shape.style.animationDuration = (6 + Math.random() * 4) + 's';

    shapesContainer.appendChild(shape);

    // Remove shape after animation completes (8s max)
    setTimeout(() => {
      if (shape.parentElement) {
        shapesContainer.removeChild(shape);
      }
    }, 9000);
  }

  // Button feedback effect
  startBtn.disabled = true;
  startBtn.textContent = "Good Luck!";
  setTimeout(() => {
    startBtn.disabled = false;
    startBtn.textContent = "Start Game";
  }, 3000);
});
