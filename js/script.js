import {textarea, displayedMessageContainer, btnEncrypt, btnDecrypt, btnCopy, copyIcon, letterMappings} from './variables.js';
import showMessage from './showMessage.js';
import changeButtonState from './changeButtonState.js';

function encryptMessage(text) {
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

    showMessage(message, encryptedMessage);
    textarea.value = "";
}

function decryptMessage(text) {
    let message = text.value.toLowerCase();

    // Iterate through the letterMappings to perform reverse replacements
    for (const [original, replacement] of Object.entries(letterMappings)) {
        // Replace encrypted substrings with their original vowels
        message = message.replaceAll(replacement, original);
    }

    showMessage(message, message);
    textarea.value = "";
}

// Function to copy the message
function copyMessage() {
    const textToCopy = displayedMessageContainer.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        changeButtonState(); // Change button state after successful copy
    })
    .catch(() => {
        alert("Couldn't copy the message to the clipboard. Please try again later.");
    });
}

// Add click event to the button
btnCopy.addEventListener('click', () => {
    copyMessage();
});

btnCopy.appendChild(copyIcon);

btnEncrypt.addEventListener('click', () => encryptMessage(textarea));
btnDecrypt.addEventListener('click', () => decryptMessage(textarea));