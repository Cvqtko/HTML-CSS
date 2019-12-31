window.addEventListener('load', (event) => {
  document.getElementsByTagName('body')[0].classList.add('loaded');
});

function myFunction() {
	  var x = document.getElementById("navigation");
	  if (x.className === "navigation") {
	    x.className += " responsive";
	  } else {
	    x.className = "navigation";
	  }
}
function myLocation() {
	window
			.open("https://www.google.com/maps/place/ul.+%22Belmeken%22+2,+1618+Bakston,+Sofia/@42.6669158,23.2632387,14.5z/data=!4m5!3m4!1s0x40aa84cecc3febb7:0xf139452796a01acf!8m2!3d42.6699639!4d23.2712631");
}

