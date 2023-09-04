import { btnCopy, checkedIcon } from "./variables.js";
import cleanMessage from "./cleanMessage.js";

export default function changeButtonState() {
    const originalContent = btnCopy.innerHTML;

    btnCopy.classList.add('copied');
    btnCopy.textContent = 'Copiado';
    checkedIcon.classList.remove('inactive');
    btnCopy.appendChild(checkedIcon);

    setTimeout(() => {
        btnCopy.classList.remove('copied');
        btnCopy.innerHTML = originalContent;
        checkedIcon.classList.add('inactive');
    }, 2000);

    setTimeout(() => {
        cleanMessage();
    }, 3000);
}