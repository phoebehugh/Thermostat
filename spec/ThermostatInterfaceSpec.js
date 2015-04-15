describe('Thermostat interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays the default temperature 20 on the server', function() {
    expect($('#temperature')).toHaveText("20");
  });

});
