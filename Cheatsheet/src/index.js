var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
  function myFunction(event) {
    // Get the <pre> element containing the code
    var codeBlock = event.target.parentElement.querySelector('.myPreTag');

    // Create a range to select the text
    var range = document.createRange();
    range.selectNode(codeBlock);

    // Create a selection to hold the range
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Execute the copy command
    document.execCommand('copy');

    // Clear the selection
    selection.removeAllRanges();

 // Change the button text to "Copied"
 var copyButton = event.target;
 copyButton.innerText = 'Copied';

 // Reset the button text after 2 seconds (you can adjust the time)
 setTimeout(function () {
     copyButton.innerText = 'Copy text';
 }, 2000); // 2000 milliseconds (2 seconds) delay
}
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}