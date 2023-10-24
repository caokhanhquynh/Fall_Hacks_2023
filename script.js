const taskBox = document.getElementById('taskBox');
const taskContent = document.getElementById('taskContent');
const saveButton = document.getElementById('saveButton');
const returnButton = document.getElementById('returnButton');
const addButton = document.getElementById('toggle-button');

const goalInput = document.getElementById('goal');
const priorityInput = document.getElementById('priority');
const tagInput = document.getElementById('tag');
const timelineInput = document.getElementById('timeline');

const infoContainer = document.getElementById('infoContainer');

goalInput.addEventListener('input', handleInput(goalInput));
priorityInput.addEventListener('input', handleInput(priorityInput));
tagInput.addEventListener('input', handleInput(tagInput));
timelineInput.addEventListener('input', handleInput(timelineInput));


let isContentVisible = false;
add.addEventListener('click', () => {
    isContentVisible = !isContentVisible;
    taskContent.style.display = isContentVisible ? 'block' : 'none';

    // Change the button image source based on the content visibility
    const buttonImage = add.querySelector('img');
    if (isContentVisible) {
        buttonImage.src = 'img/minus.png';
        buttonImage.alt = 'Minus';
    } else {
        buttonImage.src = 'img/plus.png';
        buttonImage.alt = 'Plus';
    }

});

returnButton.addEventListener('click', () => {
    isContentVisible = !isContentVisible;
    taskContent.style.display = isContentVisible ? 'block' : 'none';

    // Change the button image source based on the content visibility
    const buttonImage = add.querySelector('img');
    if (isContentVisible) {
        buttonImage.src = 'img/minus.png';
        buttonImage.alt = 'Minus';
    } else {
        buttonImage.src = 'img/plus.png';
        buttonImage.alt = 'Plus';
    }
});

function getRandomColorFromSet() {
    const colors = ["#FFEC00", "#FFCA27", "#FD8D04", "#FFF23E"]; // Define a set of colors
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
saveButton.addEventListener('click', () => {
    // Get the values entered by the user
    const goal = document.getElementById('goal').value;
    const priority = document.getElementById('priority').value;
    const tag = document.getElementById('tag').value;
    const timeline = document.getElementById('timeline').value;

    // Generate a random color from the predefined set
    const priorityColor = getRandomColorFromSet();

    // Create a new div to display the information
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box'; // Apply the CSS class
 
    // Populate the div with the entered information
    infoBox.innerHTML = `
    <div class="ElementsBox">
        <div class="Date" class="centered-text">${timeline}</div>
        <div class="Priority" class="centered-text" style="background-color: ${priorityColor};">${priority}</div>
        <div class="Tag" class="centered-text">${tag}</div>
        <div class="Goal" class="centered-text">${goal}</div>
    </div>
    `;
 
    // Append the infoBox to the infoContainer
    infoContainer.appendChild(infoBox);
 
    // Clear the input fields
    document.getElementById('goal').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('tag').value = '';
    document.getElementById('timeline').value = '';
 
    // Reset the placeholder text in the "Tag" input field
    goalInput.placeholder = 'Goal';
    priorityInput.placeholder = 'Priority';
    tagInput.placeholder = 'Tag';
    timelineInput.placeholder = 'Timeline';
 });
 

function handleInput(inputElement) {
    return function () {
        if (inputElement.value) {
            inputElement.removeAttribute('placeholder');
        } else {
            inputElement.setAttribute('placeholder', inputElement.getAttribute('name'));
        }
    };
}

