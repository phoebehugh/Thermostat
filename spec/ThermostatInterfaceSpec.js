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

  describe('The colour changes to reflect the temperature', function() {
      it('it has a colour of green when the temp is less than 18', function() {
      for (x = 0; x <5; x++) {
      $("#down").click();
      };
        expect($('#temperature').css("color")).toEqual('rgb(153, 255, 153)');
      });
     
      it('it has a colour of yellow when the temp is more than 17 and less than 26', function() {
        expect($('#temperature').css("color")).toEqual('rgb(255, 255, 153)');
      });

      it('it has a colour of red when the temp is greater than 25', function() {
      $("#powersaveOff").click();
      for (x = 0; x <10; x++) {
      $("#up").click();
      };
        expect($('#temperature').css("color")).toEqual('rgb(255, 51, 51)');
      });

  });



});
