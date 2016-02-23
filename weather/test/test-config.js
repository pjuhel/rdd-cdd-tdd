var assert = require('assert'),
    config = require('./../lib/config');

var units = {
          type: 1,
          tmp: 2,
          speed:3
      };
var ip = '404';

var Config = config(units, ip);

describe('Config', function () {
    it('has 3 props', function (){
      assert.equal(Object.keys(Config).length, '3', 'All good');
    });

    it('after construction, 2 props are populated', function (){
      var count = 0;
      Object.keys(Config).forEach(function(current){
        if(current != null && current != '') count++;
      });
      assert(count, 2);
    });

    it('after construction, prop 2 is unit', function(){
      assert(Object.keys(Config)[1], units)
    });

    it('after construction, prop 3 is ip', function(){
      assert(Object.keys(Config)[2], ip)
    });

    it('has correct key types', function(){
      assert(typeof Object.keys(Config)[1] === 'string' && typeof Object.keys(Config)[2] === 'string')
    });
});
