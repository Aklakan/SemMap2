$(window).load(function() {
	init();
});


var map, layer;


function refresh() {

	var sparqlService = new sparql.SparqlServiceHttp("http://linkedgeodata.org/sparql", [], "lib/SparqlProxyPHP/current/sparql-proxy.php");
	
	//var queryStr = "Construct { ?s ?p ?o . ?s <http://geovocab.org/geometry#geometry> ?g . ?g ?p2 ?o2 } { ?s ?p ?o . ?s <http://geovocab.org/geometry#geometry> ?g . ?g ?p2 ?o2 } Limit 100"
	
	// This query fetches 10 restaurants, and 10 other resources
	var queryStr
		= "Prefix lgdo: <http://linkedgeodata.org/ontology/>\n"
		+ "Construct { ?s ?p ?o } {\n"
		+ "  ?s ?p ?o .\n"
		+ "    { { Select ?s { ?s a lgdo:Restaurant } Limit 10 } }\n"
		+ "  Union\n"
		+ "    { { Select ?s { ?s a lgdo:Node } Limit 10 } }\n"
		+ "}";
		;
	
	var task = sparqlService.executeSelect(queryStr);
	task.done(function(json) {
		alert("success" + JSON.stringify(json));
	}).fail(function(msg) {
		alert("Something went wrong with a sparql query");
	});

}

function init() {
	
	refresh();
	
	
	/*
	var ResourceModel = Backbone.Model.extend({
		uri: false
	});
	
	var UriCollection = Backbone.Collection.extend({
		//model: ResourceModel 
	});
	*/
	
	var MapModel = Backbone.Model.extend({
		/*
		 * The collection of resources that should be displayed.
		 */
		resources: [],
		//resources: new ResourceCollection(),
		
		/*
		 * Rdf data about these resources in Talis Json format
		 */
		rdfModel: {}
	});
	
	
	var MarkerModel = Backbone.Model.extend({
		id: "http://example.org/defaultid",
		data: {}
	});
	
	var MarkerView = Backbone.View.extend({
		events: {
			'mapevent': function() {

			}
		}
	});
	
	
	var mapModel = new MapModel();
	
	var mapView = new semmap.MapView({
		el: $("#map"),
		model: mapModel,
	});

	mapView.on("mapevent", function() {
		console.log("mapevent");
	});
	
	mapView.render();
}
