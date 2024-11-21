var hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'salmon';
});

hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
});


const inputField = document.getElementById('keyInput');
const outputField = document.getElementById('keyOutput');

inputField.addEventListener('keydown', (event) => {
  // Display the latest key pressed
  outputField.textContent = `Latest key pressed: ${event.key}`;
});