
/*
"querySelector" method: reference to be used with event listener.
    1. to get reference of the button with html class-"copy-button" 
    2. to get reference of the input field with html class- "copy-text"
*/
const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");


/**
 * The "addEventListener" method is called on the "copyButton" element to listens for "click" event
 *      1. "copyText" element: 
 *          a. calls "select" method to select the contents of the input field
 *          b. calls "setSelectionRange" method to set the selection range of the input field 
 *             to the first and last characters of the text.
 *      2. "document" object :
 *          a. calls "execCommand" method to execute the "copy" command- which copies the selected text 
 *             to the clipboard.
 *      3. "copyButton" element:
 *          a. toggles the "success" class(css class) to change its background color to green
 *          b. changes the text inside the button to say "Copied!" instead of "Copy"
 *      4. timeout function: 
 *          a. that waits for two seconds and then toggles the "success" class 
 *          b. and changes the text back to "Copy"
 */
copyButton.addEventListener("click", () => {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyButton.classList.toggle("success");
  copyButton.innerHTML = "Copied!";

  setTimeout(function () {
    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copy";
  }, 2000);
});