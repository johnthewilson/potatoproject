'use strict';

describe('Controller: ChildCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoApp'));

  var ChildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChildCtrl = $controller('ChildCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChildCtrl.awesomeThings.length).toBe(3);
  });
});
