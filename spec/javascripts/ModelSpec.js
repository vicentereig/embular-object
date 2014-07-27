describe("AngularData.Model", function () {
    var model;

    beforeEach(module('embular-object'));

    describe("when parsing getters and setters", function () {
        var parse;
        beforeEach(function () {
            inject(['$parse', function ($parse) {
                parse = $parse;
            }]);
        });

        it("should get and set values from a POJO", function () {
            var object = {user: {name: 'zoe'}};

            var getter = parse('user.name');
            var setter = getter.assign;

            expect(getter(object)).toEqual('zoe');
            setter(object, 'shiv');
            expect(object.user.name).toEqual('shiv');
        });

        it("should get and set values from an Ember Object", function() {
            var User = Ember.Object.extend({
               fullName: function() {
                   return [this.get('name'), this.get('lastName')].join(' ');
               }.property('name', 'lastName')
            });

            var user = User.create({name: 'Matte', lastName: 'Noble'});

            var fullNameGetter = parse('fullName');
            var nameGetter = parse('name');
            var nameSetter = nameGetter.assign;

            expect(fullNameGetter(user)).toEqual('Matte Noble');
            nameSetter(user, 'Mateo');
            expect(fullNameGetter(user)).toEqual('Mateo Noble');
        });
    });
});
