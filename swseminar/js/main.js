$(window).load(function() {
	init();
});


//var map, layer;


var fetchSampleData = function() {
	var sparqlService = new sparql.SparqlServiceHttp("http://linkedgeodata.org/sparql", [], "lib/SparqlProxyPHP/current/sparql-proxy.php");
	
	//var queryStr = "Construct { ?s ?p ?o . ?s <http://geovocab.org/geometry#geometry> ?g . ?g ?p2 ?o2 } { ?s ?p ?o . ?s <http://geovocab.org/geometry#geometry> ?g . ?g ?p2 ?o2 } Limit 100"
	
	// This query fetches 10 restaurants, and 10 other resources
	var queryStr
		= "Prefix lgdo: <http://linkedgeodata.org/ontology/>\n"
		+ "Construct { ?s ?p ?o } {\n"
		+ "  ?s ?p ?o .\n"
		+ "    { { Select ?s { ?s a lgdo:Restaurant ; rdfs:label ?l } Limit 10 } }\n"
		+ "  Union\n"
		+ "    { { Select ?s { ?s a lgdo:Node ; rdfs:label ?l } Limit 10 } }\n"
		+ "}";
		;	

	var result = sparqlService.executeSelect(queryStr);
	return result;
}

function init() {
	
	
	/*
	var ResourceModel = Backbone.Model.extend({
		uri: false
	});
	
	var UriCollection = Backbone.Collection.extend({
		//model: ResourceModel 
	});
	*/

	var MarkerView = Backbone.View.extend({
		events: {
			'mapevent': function() {

			}
		}
	});

	var MapModel = Backbone.Model.extend({
		/**
		 * The collection of resources that should be displayed. 
		 */
		uris: [],
		//resources: new ResourceCollection(),
		
		/**
		 * Rdf data about these resources in Talis Json format
		 */
		json: {},		
	});
	
	
	/**
	 * The view to use for markers.
	 * TODO The map is passed as some attribute - which? parent?
	 */
	//markerView: MarkerView

	
	var MarkerModel = Backbone.Model.extend({
		id: "http://example.org/defaultid",
		data: {}
	});
	
	
	
	var mapModel = new MapModel();
	
	mapModel.on("change", function() {
		//alert("Something is going on");
	});
	
	var mapView = new semmap.MapView({
		el: $("#map"),
		model: mapModel,
	});

	mapView.on("mapevent", function() {
		console.log("mapevent");
	});
	
	mapView.render();
	
	
	var appDemo = new AppDemo({
		mapModel: mapModel
	});
	
	appDemo.refresh(mapModel);
}



var AppDemo = function(options) {
	this.options = options;
}


AppDemo.prototype = {
		
		
		
		refresh: function(mapModel) {
			var self = this;
			
			var task = fetchSampleData();			
			task.done(function(json) {
				var uris = _.keys(json)
				
				mapModel.set({
					uris: uris,
					json: json
				});
				
				
			}).fail(function(msg) {
				alert("Something went wrong with a sparql query");
			});
	}		
}




///**
// * Wraps a Node of an RDF graph.
// * Enables resource centric access to the data
// */
//Entity = function(graph, id) {
//	this.id = id;
//};
//
//Entity.prototype = {
//		
//		/**
//		 * Returns the single value of a specific property.
//		 * If there is multiple values, an exception is raised. 
//		 * 
//		 */
//		getValue: function(propertyName) {
//			
//		},
//		
//		getValues: function(propertyName) {
//			
//		},
//		
//};
//
//
//var RdfModel = function() {
//	this.json;
//}
//
//
//RdfModel.prototype = {
//	
//		
//	listEntities: function() {
//		
//	},
//		
//		
//};
