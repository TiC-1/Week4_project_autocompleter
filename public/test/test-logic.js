// GLOBAL **********************************************

test("Global", function (assert) {
  function assertRequestApi(obj) {
    assert.ok(obj.hasOwnProperty("video"), "Prop Video");
    assert.equal(obj.city, "Paris", "City");
    assert.equal(obj.video.length, 10, "10 Videos");
  }
  updateStateFromCity(assertRequestApi, "Paris")
    assert.ok(true, "Empty test to wait for AJAX call");

});
