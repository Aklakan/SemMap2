var org;
(function (org) {
    (function (aksw) {
        (function (sparql) {
            (function (backend) {
                var QueryExecutionHttp = (function () {
                    function QueryExecutionHttp(serviceUri, defaultGraphUris, queryString, params) {
                        this.serviceUri = serviceUri;
                        this.defaultGraphUris = defaultGraphUris;
                        this.queryString = queryString;
                        this.params = params;
                    }
                    QueryExecutionHttp.prototype.execSelect = function () {
                        return null;
                    };
                    QueryExecutionHttp.prototype.execAsk = function () {
                        return false;
                    };
                    QueryExecutionHttp.prototype.execConstruct = function () {
                        return null;
                    };
                    QueryExecutionHttp.prototype.executeAny = function (queryString) {
                        if(!queryString) {
                            console.error("Empty queryString - should not happen");
                        }
                        var options = {
                        };
                        var serviceUri = this.serviceUri;
                        var result = QueryExecutionHttp.executeQuery(serviceUri, this.defaultGraphUris, queryString, options);
                        return result;
                    };
                    QueryExecutionHttp.executeQuery = function executeQuery(baseURL, defaultGraphUris, query, options) {
                        if(!options) {
                            options = {
                            };
                        }
                        if(!options.format) {
                            options.format = "application/json";
                        }
                        var params = _.map(defaultGraphUris, function (item) {
                            var pair = {
                                key: "default-graph-uri",
                                value: item
                            };
                            return pair;
                        });
                        params.push({
                            key: "query",
                            value: query
                        });
                        _.each(options, function (v, k) {
                            params.push({
                                key: k,
                                value: v
                            });
                        });
                        var querypart = "";
                        _.each(params, function (param) {
                            querypart += param.key + "=" + encodeURIComponent(param.value) + "&";
                        });
                        var url = baseURL + "?" + querypart;
                        var result = $.ajax({
                            url: url,
                            dataType: 'json'
                        });
                        return result;
                    }
                    return QueryExecutionHttp;
                })();
                backend.QueryExecutionHttp = QueryExecutionHttp;                
            })(sparql.backend || (sparql.backend = {}));
            var backend = sparql.backend;

        })(aksw.sparql || (aksw.sparql = {}));
        var sparql = aksw.sparql;

    })(org.aksw || (org.aksw = {}));
    var aksw = org.aksw;

})(org || (org = {}));

