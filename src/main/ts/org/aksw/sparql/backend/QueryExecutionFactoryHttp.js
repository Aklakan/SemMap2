(function (org) {
    (function (aksw) {
        (function (sparql) {
            (function (backend) {
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
                            return defaultGraphUris;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    QueryExecutionFactoryHttp.prototype.createQueryExecutionFromString = function (query) {
                        return null;
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

})(exports.org || (exports.org = {}));


