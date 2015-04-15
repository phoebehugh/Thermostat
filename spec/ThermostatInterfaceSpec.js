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

  // it('can increase the temeprature by clicking the up button', function() {
  //   thermostat.increaseTemp();
  //   expect($('#temeprature')).toHaveText("21");
  // });

});
