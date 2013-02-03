var org;
(function (org) {
    (function (aksw) {
        (function (semmap) {
            (function (app) {
                var QueryExecutionFactoryHttp = org.aksw.sparql.backend.QueryExecutionFactoryHttp;
                function greeter(person) {
                    return "Hello, " + person;
                }
                var qe = new QueryExecutionFactoryHttp("http://localhost", []);
                var user = "Jane User";
                document.body.innerHTML = greeter(user);
            })(semmap.app || (semmap.app = {}));
            var app = semmap.app;

        })(aksw.semmap || (aksw.semmap = {}));
        var semmap = aksw.semmap;

    })(org.aksw || (org.aksw = {}));
    var aksw = org.aksw;

})(org || (org = {}));

