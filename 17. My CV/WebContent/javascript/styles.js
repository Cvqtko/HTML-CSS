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
	document.getElementById('close').style.display='block';
	document.getElementById('hide-map').style.display='none';

}
function hideMap(){
	document.getElementById('map').style.display='none';
	document.getElementById('close').style.display='none';
	document.getElementById('hide-map').style.display='block';
}
