var test = require("tape");
var tapSpec = require("tap-spec");
var router = require("../src/router.js");
var supertest = require("supertest");
var fs = require("fs");

test("ciao .txt test", function (assert){
supertest(router)
.get("/search")
.expect(200)
.end(function(error, response){
assert.equal(response.text, JSON.stringify(["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"]), "risposta test ciaociao");
assert.end();
});
});




// assert.ok(response.text.includes("A"),
//  "we can open the .txt");
//   assert.end();
