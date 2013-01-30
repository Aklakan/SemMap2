///<reference path='./../../sparql/backend/all.ts'/>

module org.aksw.semmap.app {

	//import backend = org.aksw.sparql.backend; //module("org.aksw.sparql.backend");
	//import foobar = module("org.aksw.sparql.backend");
	var QueryExecutionFactoryHttp = org.aksw.sparql.backend.QueryExecutionFactoryHttp; 
	
	function greeter(person : string) : string {
	    return "Hello, " + person;
	}
	
	
	var qe = new QueryExecutionFactoryHttp("http://localhost", []);
	
	var user = "Jane User";
	
	document.body.innerHTML = greeter(user);

}
