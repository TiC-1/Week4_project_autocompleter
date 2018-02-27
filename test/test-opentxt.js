var test = require("tape");
var tapSpec = require("tap-spec");
var index = require("../src/index.js");
var supertest = require("supertest");
var fs = require("fs");

test("ciao .txt test", function (assert){
supertest(router)
.get("/")
.expect(200)
.end(function(error, response){


  assert.ok(response.text.includes("A"),
   "we can open the .txt");
    assert.end();
});
