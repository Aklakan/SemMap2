function greeter(person) {
    return "Hello, " + person;
}
var qe = new backend.QueryExecutionFactoryHttp("http://localhost", []);
var user = "Jane User";
document.body.innerHTML = greeter(user);
