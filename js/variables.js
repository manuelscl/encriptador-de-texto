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

export {textarea, btnEncrypt, btnDecrypt, btnCopy, infoMessageContainer, displayedMessageContainer, letterMappings, copyIcon, checkedIcon};