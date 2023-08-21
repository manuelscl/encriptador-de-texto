// Get references to HTML elements
const textarea = document.querySelector('.encrypt__text');
const btnEncrypt = document.querySelector('.btn__encrypt');
const btnDecrypt = document.querySelector('.btn__decrypt');
const infoMessageContainer = document.querySelector('.message__info');
const displayedMessageContainer = document.querySelector('#messageToShow');
const btnCopy = document.querySelector('.btn__copy');

// Object containing encrypted vowel mappings
const letterMappings = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

function showMessage(text, returnedMessage) {
    if(text.length > 0) {
        infoMessageContainer.classList.add('inactive');
        displayedMessageContainer.classList.remove('inactive');
        btnCopy.classList.remove('inactive');
        displayedMessageContainer.textContent = returnedMessage;
    }
    else {
        infoMessageContainer.classList.remove('inactive');
        displayedMessageContainer.classList.add('inactive');
        btnCopy.classList.add('inactive');
    }
}

// Function to encrypt the provided text
function encryptMessage(text) {
    // Convert the input text to lowercase
    let message = text.value.toLowerCase();
    let encryptedMessage = "";
    let actualPosition;
    
    // Loop through each character in the input text
    for (let i = 0; i < message.length; i++) {
        let character = message.charAt(i);
        
        // Check if the character is a vowel that needs to be encrypted
        if (letterMappings[character]) {
            actualPosition = letterMappings[character];
            encryptedMessage = encryptedMessage + actualPosition;
        }
        // If the character doesn't need to be encrypted, keep it as is
        else {
            encryptedMessage = encryptedMessage + character;
        }
    }
    
    // Log the last actualPosition and the encrypted message
    console.log(actualPosition);
    console.log(encryptedMessage);
    
    // Clear the input textarea after encryption
    showMessage(message, encryptedMessage);
    textarea.value = "";
}

// Add a click event listener to the Encrypt button
btnEncrypt.addEventListener('click', () => encryptMessage(textarea));