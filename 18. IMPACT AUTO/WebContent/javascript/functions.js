
function showNavigation() {
	  var x = document.getElementById("navigation");
	  if (x.className === "navigation") {
	    x.className += " responsive";
	  } else {
	    x.className = "navigation";
	  }
}
function showElement(element) {
	document.getElementById(element).style.display='block';

}
function hideElement(element){
	document.getElementById(element).style.display='none';
}

function sendEmail() 
{
    window.location = "mailto:cvqtkokirilov@gmail.com";
}
