///<reference path='./QueryExecution.ts'/>
///<reference path='./../sparql/syntax/all.ts'/>
module org.aksw.sparql.backend {
	
    export interface QueryExecutionFactory {
        createQueryExecutionFromQuery(query : syntax.Query) : backend.QueryExecution;
        createQueryExecutionFromString(query : string) : backend.QueryExecution;
    }

}