test("Api Test", function(assert) {
  function assertTestApiReq (err, obj) {
    assert.ok(obj.hasOwnProperty("kind"), "Request Obj");
    
  }
  var url = "https://www.googleapis.com/youtube/v3/search?q=google&part=snippet&maxResults=10&type=video&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request (assertTestApiReq, url);
  
  
  assert.ok(true, "Empty test to wait for AJAX call");

});

test("Server Test", function(assert) {
  function assertTestApiReq (err, obj) {
    assert.equal(obj[1], "b", "not b!");
    console.log(obj);
  }
  var url = "http://localhost:3006/search";
  request (assertTestApiReq, url);
  
  
  assert.ok(true, "second");

});


// GLOBAL **********************************************

test("Global", function (assert) {
    function callback (obj){
        assert.equal(obj,"[a,b,c,d,e,f,g,h,i,l]","URL OK!!!" )
    }
  
  getWordlist(callback, "localhost:3002/search");
    

});
