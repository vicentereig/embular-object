describe("AngularData.Model", function() {
    var model;

    beforeEach(module('angular-data'));
    beforeEach(function () {
        inject(['Model', function (injectedModel) {
            model = injectedModel;
        }]);
    });

    it("should be injectable", function () {
        expect(model).toBeDefined();
    });
});
