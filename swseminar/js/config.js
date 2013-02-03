var config = {}; // Yet another global variable :/

var RDFAUTHOR_BASE = "lib/RDFauthor/current/";


(function() {



	var isSvgSupported = SvgUtils.supportsSvg(); 
	var suffix = isSvgSupported ? "svg" : "gif";
	
	config.markerUrlDefault = "src/main/resources/images/org/openclipart/people/mightyman/map-marker-blue." + suffix;
	config.markerUrlSelected = "src/main/resources/images/org/openclipart/people/mightyman/map-marker-orange." + suffix;


})();
