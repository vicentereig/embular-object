var Embular = angular.module('embular-object', []);

Embular.config(['$provide', function($provide) {
    $provide.decorator('$parse', ['$delegate',function($delegate) {
        return function(expression) {
            var parsed = $delegate(expression);

            var getter = function(scope, locals) {
                if (angular.isString(expression)) {
                    var propertyPath = expression.split('.');
                    var objectName   = propertyPath.shift();
                    var propertyPathExpression = propertyPath.join('.');

                    var object = scope[objectName];
                    if (angular.isFunction(object.get)) {
                        return object.get(propertyPathExpression);
                    }
                }

                return parsed(scope, locals);
            };

            getter.assign = function(scope, newValue) {
                if (angular.isString(expression)) {
                    var propertyPath = expression.split('.');
                    var objectName   = propertyPath.shift();
                    var propertyPathExpression = propertyPath.join('.');

                    var object = scope[objectName];

                    if (angular.isFunction(object.set)) {
                        return object.set(propertyPathExpression, newValue)
                    }
                }
                var oldValue = parsed(scope);
                return parsed.assign(scope, newValue);
            };

            return getter;
        };
    }]);
}]);
