var Embular = angular.module('embular-object', []);

Embular.config(function($provide) {
    $provide.decorator('$parse', ['$delegate',function($delegate) {
        return function(expression) {
            var parsed = $delegate(expression);

            var getter = function(object, locals) {
                var value = parsed(object, locals);
                return angular.isFunction(object.get) ? object.get(expression) : value;
            };

            getter.assign = function(object, newValue) {
                var oldValue = parsed(object);
                return angular.isFunction(object.set) ? object.set(expression, newValue) : parsed.assign(object, newValue);
            };

            return getter;
        };
    }]);
});
