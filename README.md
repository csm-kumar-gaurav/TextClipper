
Functional Implementation:

1. create a basic HTML skelton
	- header-text:	"Copy Text to Clipboard"
	- input-field:	default text - "copy me!"
	- button: clicking which text copied over clipboard and paste into a text area placeholder
	- text-area: to display pasted contents
          
2. Styling each HTML elements and complete web page
	- apply the box-sizing property to all elements on the page. 
	- style "body" selector to center the content of the page and ensure that it takes up the full width of the viewport. 
	- style "container" selector to hold the page content.
	- style "h1" selector for the main heading of the page. Also, apply "@media" rules to the page when the screen width is less than or equal to 768 pixels.
	- style "input", "button", and "textarea" selectors for form elements like input fields and button.
	- apply "success" class to changes the background color of the button when an action is successful.
  
3. Call "addEventListener" method on the "copyButton" element to listens for below "click" events
	- "copyText" element to select text inputs
	- "document" object to execute the "copy" command- which copies the selected text to the clipboard.
	- On success, the "copyButton" element toggles its background color to green. Also, changes the text inside the button to say "Copied!" instead of "Copy"
	- timeout function implementation waits for two seconds and then toggles the "success" class and changes the text back to "Copy"

