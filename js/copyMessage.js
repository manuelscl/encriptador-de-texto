import { displayedMessageContainer } from "./variables.js";
import changeButtonState from "./changeButtonState.js";

export default function copyMessage() {
    const textToCopy = displayedMessageContainer.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        changeButtonState(); // Change button state after successful copy
    })
    .catch(() => {
        alert("Couldn't copy the message to the clipboard. Please try again later.");
    });
}