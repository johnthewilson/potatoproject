'use strict';

describe('Directive: modelDirective', function () {

  // load the directive's module
  beforeEach(module('potatoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<model-directive></model-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the modelDirective directive');
  }));
});
