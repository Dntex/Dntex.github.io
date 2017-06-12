function mapa1() {
	var map;
	function initialize() 
	{
		var mapOptions = {
			zoom: 8,
			scrollwheel: false,
			center: new google.maps.LatLng(-7.156848, -78.517519)
		};
		map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
}