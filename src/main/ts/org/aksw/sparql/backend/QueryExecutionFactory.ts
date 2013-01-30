///<reference path='./QueryExecution.ts'/>
///<reference path='./../sparql/syntax/all.ts'/>
export module org.aksw.sparql.backend {

    export interface QueryExecutionFactory {
        createQueryExecutionFromQuery(query : Query) : QueryExecution;
        createQueryExecutionFromString(query : string) : QueryExecution;
    }

}