
# Embular::Object

Demo: http://hola-embular.herokuapp.com/
Sample app: https://github.com/vicentereig/hola-embular

## Installation

Add this line to your application's Gemfile:

    gem 'embular-object', github: 'vicentereig/embular-object'
    
Require the Angular module into your Asset Pipeline
    
```javascript
//= require embular-object
```

Inject the `embular-object` module into your Angular app. 
It contains a decorator around [`$parse`](https://docs.angularjs.org/api/ng/service/$parse) 
which use Ember's getter and setters to access properties and computed properties in your model.

```javascript
  var App = angular.module('hola-embular', ['embular-object']);
```

Use the `$scope` to expose an Ember Object to your angular templates.

```javascript
    var App = angular.module('hola-embular', ['templates', 'embular-object']);
    
    var Customer = Ember.Object.extend({
        fullName: function() {
            return [this.get('name'), this.get('lastName')].join(' ');
        }.property('name', 'lastName')
    });
    
    function CustomerDetailsController($scope) {
        var customer = Customer.create({name: 'Íñigo', lastName: 'Montoya'});
        $scope.customer = customer;
    }
    
    App.controller('CustomerDetailsController', ['$scope', CustomerDetailsController]);
```
