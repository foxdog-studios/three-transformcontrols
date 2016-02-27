var THREE = require('three');
var MockBrowser = require('mock-browser').mocks.MockBrowser;

var TransformControl = require('../index.js');

var mock = new MockBrowser();


var assert = require('assert');
describe('TransformControl', function() {
  describe('creation', function () {
    it('should construct a controls', function () {
      var doc = mock.getDocument();
      var div = doc.createElement('div');
      var transformControl = new TransformControl(new THREE.Object3D, div);
      assert.ok(transformControl);
    });
    it('should not be on the THREE object', function () {
      assert.equal(THREE.TransformControl, undefined);
    });
  });
});

