window.addEventListener('load', (event) => {
  document.getElementsByTagName('body')[0].classList.add('loaded');
});

function myFunction() {
	  var x = document.getElementById("my-navigation");
	  if (x.className === "navigation") {
	    x.className += " responsive";
	  } else {
	    x.className = "navigation";
	  }
}

