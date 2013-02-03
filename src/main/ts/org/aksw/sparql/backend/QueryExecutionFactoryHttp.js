var org;
(function (org) {
    (function (aksw) {
        (function (sparql) {
            (function (backend) {
                var syntax = org.aksw.sparql.syntax;
                ; ;
                var QueryExecutionFactoryHttp = (function () {
                    function QueryExecutionFactoryHttp(serviceUri, defaultGraphUris) {
                        this.serviceUri = serviceUri;
                        this.defaultGraphUris = defaultGraphUris;
                    }
                    Object.defineProperty(QueryExecutionFactoryHttp.prototype, "ServiceUri", {
                        get: function () {
                            return this.serviceUri;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(QueryExecutionFactoryHttp.prototype, "DefaultGraphUris", {
                        get: function () {
                            return this.defaultGraphUris;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    QueryExecutionFactoryHttp.prototype.createQueryExecutionFromString = function (queryString) {
                        var result = new backend.QueryExecutionHttp(this.serviceUri, this.defaultGraphUris, queryString, {
                        });
                        return result;
                    };
                    QueryExecutionFactoryHttp.prototype.createQueryExecutionFromQuery = function (query) {
                        return null;
                    };
                    return QueryExecutionFactoryHttp;
                })();
                backend.QueryExecutionFactoryHttp = QueryExecutionFactoryHttp;                
            })(sparql.backend || (sparql.backend = {}));
            var backend = sparql.backend;

        })(aksw.sparql || (aksw.sparql = {}));
        var sparql = aksw.sparql;

    })(org.aksw || (org.aksw = {}));
    var aksw = org.aksw;

})(org || (org = {}));

