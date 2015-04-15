$( document ).ready(function() {

  var thermostat = new Thermostat();

  var displayTemp = function() {
    $( "#temperature" ).text(thermostat.temperature);
  };

  // var tempColour = function() {
  //   if (thermostat.temperature < 18) { this }.css( "colour", "#00FF66" )
  //   else displayTemp
  // };

    displayTemp();

    $( "#up" ).on('click', function() {
        thermostat.increaseTemp(); 
    displayTemp();
    });

    $( "#down" ).on('click', function() {
        thermostat.decreaseTemp(); 
    displayTemp();
    });

    $( "#reset" ).on('click', function() {
        thermostat.resetTemp();
    displayTemp();        
    });

    $( "#powersaveOff" ).on('click', function() {
        thermostat.turnPowerSaverModeOff();
    displayTemp();   
    });

    $( "#powersaveOn" ).on('click', function() {
        thermostat.turnPowerSaverModeOn();
    displayTemp();   
    });



});

