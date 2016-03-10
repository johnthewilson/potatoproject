'use strict';

describe('Service: flickrFeed', function () {

  // load the service's module
  beforeEach(module('potatoApp'));

  // instantiate service
  var flickrFeed;
  beforeEach(inject(function (_flickrFeed_) {
    flickrFeed = _flickrFeed_;
  }));

  it('should do something', function () {
    expect(!!flickrFeed).toBe(true);
  });

});
