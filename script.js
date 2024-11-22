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
const inputSection = document.getElementById('focusBlurInput');
const messageSection = document.getElementById('focusMessage');

inputSection.addEventListener('focus', () => {
  // changes the message while being focused
  messageSection.textContent = 'Input field is focused! Start typing...';
  messageSection.style.color = '#00ee2b';
});

inputSection.addEventListener('blur', () => {
  // changes the message when no focus
  messageSection.textContent = 'Input field lost focus. Click to re-focus!';
  messageSection.style.color = '#780009';
});

//fifth part
const container = document.getElementById('buttonContainer');
const messageCon = document.getElementById('messageLabel');

    container.addEventListener('click', (event) => {

      if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        messageCon.textContent = `You clicked: ${buttonText}`;
      }
    });