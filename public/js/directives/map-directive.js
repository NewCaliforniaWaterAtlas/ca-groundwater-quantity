'use strict';

angular.module('app').directive('mapdirective', [ '$window','mapFactory', function ($window, mapService) {
	return {
		restrict: 'A',
		// replace: true,
		scope:{
      points:"="
      // layerone:"="
    },
		link: function(scope, element, attrs) {

			mapService.map().then(function() {
					
		    // var southWest = new L.LatLng(40.60092,-74.173508);
		    // var northEast = new L.LatLng(40.874843,-73.825035);            
		    // var bounds = new L.LatLngBounds(southWest, northEast);
		    L.Icon.Default.imagePath = '../img/leaflet';

		    // setup map
		    // todo: set bounds
		    var map = L.map('map', {
	        center: new L.LatLng(37.166111,-119.449444),
	        zoom: 6,
	        // maxBounds: bounds,
	        maxZoom: 18,
	        minZoom: 4
		    });

				// var ui = document.getElementById('map-ui');

		    // create the tile layer with correct attribution
		    var tilesURL = 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png';
		    var tilesAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
		    var tonerTiles = new L.TileLayer(tilesURL, {
	        // attribution: tilesAttrib, 
	        opacity: 1,
	        detectRetina: true,
	        unloadInvisibleTiles: true,
	        updateWhenIdle: true,
	        reuseTiles: true
		    });
		    tonerTiles.addTo(map);

				var wellTiles = L.mapbox.tileLayer('chachasikes.ca-gwl-wells')
					.addTo(map);
	    	
		    // attribution config
		   //  map.attributionControl.setPrefix('');
		  	// var infoControl = L.mapbox.infoControl()
		  	// 	.addTo(map);
		  	// infoControl.addInfo(tilesAttrib);
		  	// var fullscreen = L.control.fullscreen()
		  	// 	.addTo(map);

				// disable drag and zoom handlers
				map.touchZoom.disable();
				map.scrollWheelZoom.disable();
				// map.doubleClickZoom.disable();
				// map.dragging.disable();
				// disable tap handler, if present.
				// if (map.tap) map.tap.disable();

				// todo: add hashing to map
		  	// var hash = L.hash();
		  	// hash.init(map);


        //  Markers ======================================================================

		    // create feature group
		  //  	var pointGroup = L.featureGroup();

				// // watch for points changes and re-render
    //     scope.$watch('points', function (newvals, oldvals) {
    //       return scope.render(newvals);
    //     }, true);

    //     scope.render = function(data) {
    //     	// remove all previous items before render
    //     	pointGroup.clearLayers();

    //     	// check to see if points exist
    //     	if (!data) return;

				// 	function styleData(data) {
				// 		return {
				// 	    radius: 5,
				// 	    fillColor: "#666",
				// 	    color: "#666",
				// 	    weight: 3,
				// 	    opacity: 1,
				// 	    fillOpacity: 0.85
				// 		};
				// 	}

				// 	thePoints = L.geoJson(data, {
				//     pointToLayer: function (feature, latlng) {
				//       return L.circleMarker(latlng,{})
				//     },
				//     style: styleData
				// 	}).addTo(pointGroup);
					
				// 	// add circle markers to map
				// 	pointGroup.addTo(map);
						
					
				// }// scope.render
        
			});//end mapService
			
		}//end link
	}//end return

}]);//end .directive