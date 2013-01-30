export module org.aksw.sparql.backend {
	export interface QueryExecution {
		execAsk() : bool;
        execSelect() : any;
        execConstruct() : any;
	}
}