$( document ).ready(function() {

  var thermostat = new Thermostat();

  function color() {
    var temp = thermostat.temperature
    if (temp < 18) $('#temperature').css( "color", 'rgb(153, 255, 153)' )
    if (temp > 26) $('#temperature').css( "color", 'rgb(255, 51, 51)' )
    if (temp > 17 && temp < 27) $('#temperature').css("color", 'rgb(255, 255, 153)' )
  };

  var displayTemp = function() {
    color();
    $( "#temperature" ).text(thermostat.temperature);
  };

    displayTemp();

    $( "#up" ).on('click', function() {
      thermostat.increaseTemp(); 
      displayTemp();
      
      $.post("/temperature_change", { 
        Temperature: thermostat.temperature
      });
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

