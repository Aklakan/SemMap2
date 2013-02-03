var config = {}; // Yet another global variable :/

var RDFAUTHOR_BASE = "lib/RDFauthor/current/";


(function() {

	//config.sparqlServiceUrl = "http://linkedgeodata.org/sparql";
	config.sparqlServiceUrl = "http://cstadler.aksw.org/swseminar/sparql";

	config.sparqlProxyUrl = "lib/SparqlProxyPHP/current/sparql-proxy.php";

	var isSvgSupported = SvgUtils.supportsSvg(); 
	var suffix = isSvgSupported ? "svg" : "gif";
	
	config.markerUrlDefault = "src/main/resources/images/org/openclipart/people/mightyman/map-marker-blue." + suffix;
	config.markerUrlSelected = "src/main/resources/images/org/openclipart/people/mightyman/map-marker-orange." + suffix;


})();
