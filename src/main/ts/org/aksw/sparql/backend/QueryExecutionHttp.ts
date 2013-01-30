///<reference path="./../../../../declarations/jquery.d.ts" />
///<reference path="./../../../../declarations/underscore.d.ts" />
module org.aksw.sparql.backend {

	export class QueryExecutionHttp {

		private serviceUri : string;
		private defaultGraphUris : string[];
		private queryString : string;
		private params : any;
	    
		
		constructor(serviceUri : string, defaultGraphUris : string[], queryString : string, params : any) {
			this.serviceUri = serviceUri;
			this.defaultGraphUris = defaultGraphUris;
			this.queryString = queryString;
			this.params = params;
			//this.params = 
		}
		
		execSelect() : any {
			return null;
		}
		
		execAsk() : bool {
			return false;
		}
		
		execConstruct() : any {
			return null;
		}
		
		
		/**
		 * Executes a query
		 * 
		 */
		executeAny(queryString : string) : any {
			
			//console.log("Preparing SPARQL query: " + query);
			
			// TODO Make this a switch
//			if(true) {
//				if(query.flatten) {
//					var before = query;
//					query = before.flatten();
//					
//					//console.log("FLATTEN BEFORE: " + before, before);
//					//console.log("FLATTEN AFTER:"  + query, query);
//				}
//			}
			
			
			// Force the query into a string
			//var queryString = "" + query;
			
			if(!queryString) {
				console.error("Empty queryString - should not happen");
			}

			var options : any = {};
			var serviceUri : string = this.serviceUri;
			
			/*
			if(this.proxyServiceUri) {
				options[this.proxyParamName] = serviceUri;
				serviceUri = this.proxyServiceUri;
			}
			*/
			
			
			var result = QueryExecutionHttp.executeQuery(serviceUri, this.defaultGraphUris, queryString, options);
				
			return result;
		}
		

		
		/**
		 * Adapted from http://www.openlinksw.com/blog/~kidehen/?id=1653
		 * 
		 * @param baseURL
		 * @param query
		 * @param callback
		 * @param format
		 */
		static executeQuery(baseURL : string, defaultGraphUris : string[], query : string, options : any) {
			if(!options) {
				options = {};
			}
			
			if(!options.format) {
				// FIXME Should not modify options object
				options.format="application/json";
			}
			
			/*
			var params={
				"default-graph": "", "should-sponge": "soft", "query": query,
				"debug": "on", "timeout": "", "format": format,
				"save": "display", "fname": ""
			};
			*/
			var params = _.map(defaultGraphUris, function(item) {
				var pair = {key: "default-graph-uri", value: item };
				return pair;
			});
			
			params.push({key: "query", value: query});
			//params.push({key: "format", value: format});
		
			_.each(options, function(v, k) {
				params.push({key: k, value: v});
			});
			
			var querypart="";
			_.each(params, function(param) {
				//querypart+=k+"="+encodeURI(params[k])+"&";
				querypart+=param.key+"="+encodeURIComponent(param.value)+"&";
			});

			var url = baseURL + "?" + querypart;
			//alert("url: " + url);
			
			//return $.post(baseURL, querypart);
			var result = $.ajax({
				url: url,
				dataType: 'json'
			});
				
			return result;
		};

	}
}
