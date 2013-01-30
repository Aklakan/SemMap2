///<reference path='./QueryExecution.ts'/>
///<reference path='./../syntax/all.ts'/>
export module org.aksw.sparql.backend {

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
			return defaultGraphUris;
		}

        createQueryExecutionFromString(query : string) : QueryExecution {
        	return null;
        }
		
        //createQueryExecution(query : string) : QueryExecution;
        createQueryExecutionFromQuery(query : Query) : QueryExecution {
        	return null;
        }

	}

}