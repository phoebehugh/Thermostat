var Thermostat = function() {
  this.temperature = 20;
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
  if (this.temperature > this.maxTemp()) this.temperature = this.maxTemp();
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature -= 1;
  if (this.temperature < this.minTemp()) this.temperature = this.minTemp();
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.turnPowerSaverModeOff = function() {
  this.isInPowerSaverMode = false;
};

Thermostat.prototype.turnPowerSaverModeOn = function() {
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.maxTemp = function() {
  return (this.isInPowerSaverMode ? 25 : 32); 
};

Thermostat.prototype.minTemp = function() {
  return 10
};

Thermostat.prototype.colour = function() {
  if (this.temperature < 18) { 
    return("green");
  } else if (this.temperature > 17 && this.temperature < 26 ){
    return("yellow");
  } else {
    return("red");
  }
};

