///<reference path='./../../sparql/backend/all.ts'/>

//import backend = org.aksw.sparql.backend; //module("org.aksw.sparql.backend");


function greeter(person : string) : string {
    return "Hello, " + person;
}


var qe = new backend.QueryExecutionFactoryHttp("http://localhost", []);

var user = "Jane User";

document.body.innerHTML = greeter(user);
