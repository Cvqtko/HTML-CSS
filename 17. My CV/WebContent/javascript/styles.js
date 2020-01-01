window.addEventListener('load', (event) => {
  document.getElementsByTagName('body')[0].classList.add('loaded');
});

function showNavigation() {
	  var x = document.getElementById("navigation");
	  if (x.className === "navigation") {
	    x.className += " responsive";
	  } else {
	    x.className = "navigation";
	  }
}
function showMap() {
	document.getElementById('map').style.display='block';
	document.getElementById('close-map').style.display='block';

}
function hideMap(){
	document.getElementById('map').style.display='none';
	document.getElementById('close-map').style.display='none';
}
