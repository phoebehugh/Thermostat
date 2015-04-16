describe('Thermostat interface', function() {

  var thermostat

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    thermostat = new Thermostat
  });

  it('displays the default temperature 20 on the server', function() {
      expect($('#temperature')).toHaveText("20");
  });

  describe('controlling the temperature', function() {    

    it('can increase the temperature by clicking the up button', function() {
      $("#up").click();
      expect($('#temperature')).toHaveText("21");
    });

    it('can decrease the temperature by clicking the down button', function() {
      $("#down").click();
      expect($('#temperature')).toHaveText("19");
    });

    it('can reset the temperature to 20 when pressing the reset button', function() {
      for (x = 0; x < 20; x +=1) {
        $("#up").click();
      };
     
      $("#reset").click();
      expect($('#temperature')).toHaveText("20")
    });

  });

  describe('clicking the power save button', function() {

    it('can turn power save mode off', function() {
      $("#powersaveOff").click();
      for (x = 0; x < 20; x += 1) {
      $("#up").click();
      };
      expect($('#temperature')).toHaveText("32");
    });

    it('can turn power save mode on', function() {
      $("#powersaveOff").click()
      $("#powersaveOn").click();
      for (x = 0; x < 20; x += 1) {
      $("#up").click();
      };
      expect($('#temperature')).toHaveText("25");
    });

  });

  // describe('temperature is reflected by colour', function() {

  //     it('temperature is green when below 18 degrees', function() {
  //       thermostat.temperature = 17
  //       expect($('#temperature')).toHaveCSS({"color": "#00FF66"});
  //     });

  // });

});
