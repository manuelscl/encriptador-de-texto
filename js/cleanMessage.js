import { infoMessageContainer, displayedMessageContainer, btnCopy } from "./variables.js";

export default function cleanMessage() {
    infoMessageContainer.classList.remove('inactive');
    displayedMessageContainer.classList.add('inactive');
    btnCopy.classList.add('inactive');
}