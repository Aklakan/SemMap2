var org;
(function (org) {
    (function (aksw) {
        (function (commons) {
            (function (util) {
                var Pair = (function () {
                    function Pair(key, value) {
                        this.key = key;
                        this.value = value;
                    }
                    Object.defineProperty(Pair.prototype, "Key", {
                        get: function () {
                            return this.key;
                        },
                        set: function (key) {
                            this.key = key;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Pair.prototype, "Value", {
                        get: function () {
                            return this.key;
                        },
                        set: function (value) {
                            this.value = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return Pair;
                })();
                util.Pair = Pair;                
            })(commons.util || (commons.util = {}));
            var util = commons.util;

        })(aksw.commons || (aksw.commons = {}));
        var commons = aksw.commons;

    })(org.aksw || (org.aksw = {}));
    var aksw = org.aksw;

})(org || (org = {}));

