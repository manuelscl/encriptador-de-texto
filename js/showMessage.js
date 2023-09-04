import { infoMessageContainer, displayedMessageContainer, btnCopy } from "./variables.js";
import cleanMessage from "./cleanMessage.js";

export default function showMessage(isMessageEmpty, returnedMessage) {
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