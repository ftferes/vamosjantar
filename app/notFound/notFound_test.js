'use strict';

describe('myApp.notFound module', function() {

  beforeEach(module('myApp.notFound'));

  describe('notFound controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('NotFoundCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});