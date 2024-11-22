//First Part
var hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'salmon';
});

hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
});

//Second Part
const inputField = document.getElementById('keyInput');
const outputField = document.getElementById('keyOutput');

inputField.addEventListener('keydown', (event) => {
  
  outputField.textContent = `Latest key pressed: ${event.key}`;
});

//Third Part
const form = document.getElementById('formEvents');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstName = form.firstNameForm.value; 
  const lastName = form.lastNameForm.value; 

  messageDiv.textContent = `Hello, ${firstName} ${lastName}!`;
  
  form.reset();
});

//fourth part
