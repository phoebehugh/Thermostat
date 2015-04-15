$( document ).ready(function() {

  var thermostat = new Thermostat();
    $( "#temperature" ).text(thermostat.temperature);

    $( "#up" ).on('click', function() {
        thermostat.increaseTemp(); 
    $( "#temperature" ).text(thermostat.temperature);
    });

    $( "#down" ).on('click', function() {
        thermostat.decreaseTemp(); 
    $( "#temperature" ).text(thermostat.temperature);
    });

    $( "#reset" ).on('click', function() {
        thermostat.resetTemp();
    $( "#temperature" ).text(thermostat.temperature);        
    });

    $( "#powersaveOff" ).on('click', function() {
        thermostat.turnPowerSaverModeOff();
    $( "#temperature" ).text(thermostat.temperature);   
    });

    $( "#powersaveOn" ).on('click', function() {
        thermostat.turnPowerSaverModeOn();
    $( "#temperature" ).text(thermostat.temperature);   
    });

});

