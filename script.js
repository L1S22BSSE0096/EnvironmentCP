// Simple blinking effect on the Join Now button every 2 seconds

const joinBtn = document.getElementById('joinBtn');

function blinkButton() {
  joinBtn.style.animation = 'glowPulse 1.5s ease-in-out infinite';
}

// Start blinking effect
blinkButton();

// Optional: stop blinking on click and show an alert
joinBtn.addEventListener('click', () => {
  joinBtn.style.animation = 'none';
  alert('Welcome to the Squid Game! Get ready...');
});
