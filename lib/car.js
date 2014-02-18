exports.Car = function(max_speed, driver) {
  return {
    getMax_speed: function() {
      return max_speed;
    },
    getDriver: function() {
      return driver;
    },
    setDriver: function(newDriver) {
      driver = newDriver;
      return newDriver === driver;
    }
  };
};
