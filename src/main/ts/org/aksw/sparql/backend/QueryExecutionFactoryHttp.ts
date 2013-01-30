///<reference path='./QueryExecution.ts'/>
///<reference path='./../syntax/all.ts'/>
///<reference path='./../../commons/util/all.ts'/>
module org.aksw.sparql.backend {

	import syntax = org.aksw.sparql.syntax;
	
	export class QueryExecutionFactoryHttp
	    implements QueryExecutionFactory
	{
		private serviceUri : string;
	    private defaultGraphUris : string[];
		
		constructor(serviceUri : string, defaultGraphUris : string[]) {
			this.serviceUri = serviceUri;
			this.defaultGraphUris = defaultGraphUris;
		}
		
		get ServiceUri() : string {
			return this.serviceUri;
		}
		
		get DefaultGraphUris() : string[] {
			return this.defaultGraphUris;
		}

        createQueryExecutionFromString(queryString : string) : QueryExecution {
        	var result = new QueryExecutionHttp(this.serviceUri, this.defaultGraphUris, queryString, {})
        	
        	return result;
        }
		
        //createQueryExecution(query : string) : QueryExecution;
        createQueryExecutionFromQuery(query : syntax.Query) : QueryExecution {
        	return null;
        }

	}

}
