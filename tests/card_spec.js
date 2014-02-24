/*
Task: A Racing car has a max speed and a driver name. 
Example: 200, Lightning McQueen
*/

'use strict';

var Car =  require('../lib/car').Car,
  expect = require('chai').expect;

describe('car object tests', function() {
  var car;

  beforeEach( function() {
    car = new Car( 190, "Justin Bieber");
  });

  // this project is crazy!!!!
  // and max speed.
  describe('constructor', function() {
    it('car should be truthy (exists)', function() {
      expect(car).to.be.ok;
    });
    it('car should have max_speed property', function() {
      expect(car).to.have.property('getMax_speed');
    });
    it('car should have a driver', function() {
      expect(car.getMax_speed()).to.equal(190);
    });
    it('Justin Bieber should be driving the car', function() {
      expect(car.getDriver()).to.equal("Justin Bieber");
    })
  });

  // I expect that a car that I am holding will not change suit
  // and rank
  describe('immutable vs. mutable', function() {
    it('max speed should be immutable', function(){
      car.max_speed = 200;
      expect(car.getMax_speed()).to.not.equal(200);
    });
    it('driver should be mutable', function() {
      car.setDriver('Johnny Sober')
      expect(car.getDriver()).to.not.equal("Justin Bieber");
    })
  });
});


