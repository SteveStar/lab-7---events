//First Part
var hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'salmon'; //when you hover over, it becomes salmon colored
});

hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent'; //when the mouse leaves, it returns to transparency
});

//Second Part
const inputField = document.getElementById('keyInput');
const outputField = document.getElementById('keyOutput');

inputField.addEventListener('keydown', (event) => { //detects if key is pressed down
  
  outputField.textContent = `Latest key pressed: ${event.key}`; //outputs it
});

//Third Part
const form = document.getElementById('formEvents');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstName = form.firstNameForm.value; //holds the first name value
  const lastName = form.lastNameForm.value; //holds the last name value

  messageDiv.textContent = `Hello, ${firstName} ${lastName}!`; // logs it
  
  form.reset(); // after posting, it resets it
});

//fourth part
const inputSection = document.getElementById('focusBlurInput');
const messageSection = document.getElementById('focusMessage'); //grabs the id that is associated with the message section

inputSection.addEventListener('focus', () => { //when clicked on
  // changes the message while being focused
  messageSection.textContent = 'Input field is focused! Start typing...'; //changes here will splay the words
  messageSection.style.color = '#00ee2b';
});

inputSection.addEventListener('blur', () => { //when off
  // changes the message when no focus
  messageSection.textContent = 'Input field lost focus. Click to re-focus!'; //changes here will splay the words [2]
  messageSection.style.color = '#780009';
});

//fifth part
const container = document.getElementById('buttonContainer'); //grabs the ids for the containers and messagers
const messageCon = document.getElementById('messageLabel');

    container.addEventListener('click', (event) => {

      if (event.target.tagName === 'BUTTON') { //targets the button tag name, 
        const buttonText = event.target.textContent; //then makes a var that stores the certain button
        messageCon.textContent = `You clicked: ${buttonText}`; //displays it
      }
    });