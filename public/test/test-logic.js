test("Api Test", function(assert) {
  function assertTestApiReq (err, obj) {
    assert.ok(obj.hasOwnProperty("kind"), "Request Obj");
    
  }
  var url = "https://www.googleapis.com/youtube/v3/search?q=google&part=snippet&maxResults=10&type=video&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request (assertTestApiReq, url);
  
  
  assert.ok(true, "Empty test to wait for AJAX call");

});


// GLOBAL **********************************************

test("Global", function (assert) {
    function callback (obj){
        assert.equal(obj,"localhost:3002/abc","URL OK!!!" )
    }
  
  getWordlist(callback, "abc");


});
