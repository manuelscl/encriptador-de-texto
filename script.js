const textarea = document.querySelector('.encrypt__text');
const btnEncrypt = document.querySelector('.btn__encrypt');
const btnDecrypt = document.querySelector('.btn__decrypt');
const infoMessageContainer = document.querySelector('.message__info');
const displayedMessageContainer = document.querySelector('#messageToShow');
const btnCopy = document.querySelector('.btn__copy');

const copyIcon = document.createElement('i');
copyIcon.classList.add('bx', 'bx-copy-alt');
const checkedIcon = document.createElement('i');
checkedIcon.classList.add('bx', 'bx-check', 'inactive');
checkedIcon.style.fontSize = '20px';

const letterMappings = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

function cleanMessage() {
    infoMessageContainer.classList.remove('inactive');
    displayedMessageContainer.classList.add('inactive');
    btnCopy.classList.add('inactive');
}

function showMessage(isMessageEmpty, returnedMessage) {
    if(isMessageEmpty) {
        infoMessageContainer.classList.add('inactive');
        displayedMessageContainer.classList.remove('inactive');
        btnCopy.classList.remove('inactive');
        displayedMessageContainer.textContent = returnedMessage;
    }
    else {
        cleanMessage();
    }
}

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

// Function to change the button state
function changeButtonState() {
    const originalContent = btnCopy.innerHTML; // Store the original content

    btnCopy.classList.add('copied');
    btnCopy.textContent = 'Copiado';
    checkedIcon.classList.remove('inactive');
    btnCopy.appendChild(checkedIcon);

    setTimeout(() => {
        btnCopy.classList.remove('copied');
        btnCopy.innerHTML = originalContent; // Restore original content
        checkedIcon.classList.add('inactive');
    }, 2000);

    setTimeout(() => {
        cleanMessage();
    }, 3000);
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