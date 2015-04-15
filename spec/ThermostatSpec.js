describe('Thermostat', function(){

  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a temperature of 20 degrees when created', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature by 1', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature by 1', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it('can not decrease below 10', function() {
    for (x = 0; x < 100; x += 1) {
      thermostat.decreaseTemp();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  it('can reset to 20', function() {
    for (x = 0; x < 5; x += 1) {
      thermostat.increaseTemp();
    };
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  it('has power saver mode enabled by default', function() {
    expect(thermostat.isInPowerSaverMode).toEqual(true);
  });

  it('can turn power saver mode off', function() {
    thermostat.turnPowerSaverModeOff();
    expect(thermostat.isInPowerSaverMode).toEqual(false);
  });

  it('can turn power saver mode on', function() {
    thermostat.turnPowerSaverModeOff();
    thermostat.turnPowerSaverModeOn();
    expect(thermostat.isInPowerSaverMode).toEqual(true);
  });

  it('if power saver mode is on the max temp is 25', function() {
    for (x = 0; x < 10; x += 1) {
      thermostat.increaseTemp();
    };
    expect(thermostat.temperature).toEqual(25);
  });
  
  it('if power save mode is off the max temp is 32', function() {
    thermostat.turnPowerSaverModeOff();
    for (x = 0; x < 25; x += 1) {
      thermostat.increaseTemp();
    };
    expect(thermostat.temperature).toEqual(32);
  });

   describe('The colour changes to reflect the temperature', function(){

    it('has a colour of green when the temp is less than 18', function(){
      for (i = 0; i < 3; i++){
        thermostat.decreaseTemp();
      };
      expect(thermostat.colour()).toEqual("green");
    });

    it('has a colour of yellow when the temp is more than 17 and less than 26', function(){
      expect(thermostat.colour()).toEqual("yellow");
    });

    it('has a colour of red when the temp is greater than 25', function(){
      thermostat.turnPowerSaverModeOff();
      for (i = 0; i < 6; i++){
        thermostat.increaseTemp();
      };
      expect(thermostat.colour()).toEqual("red");
    });

  });

});