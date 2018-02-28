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

test ("index.html", function (assert) {
    supertest(router)
        .get("/")
        .expect(200)
        .end(function(error, response) {
                assert.ok(response.text.includes("<title>Autocomplete</title>"), 
                "Root renders index.html");
            assert.end();
        });
});
