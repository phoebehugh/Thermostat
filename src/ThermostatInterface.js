$( document ).ready(function() {

  var thermostat = new Thermostat();

  function color() {
    var temp = thermostat.temperature
    if (temp < 18) $('#temperature').css( "color", "#33FF99" )
    if (temp > 26) $('#temperature').css( "color", "#E80000" )
    if (temp > 17 && temp < 27) $('#temperature').css("color", "#FFFF00" )
  };

  var displayTemp = function() {
    color();
    $( "#temperature" ).text(thermostat.temperature);
  };

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

