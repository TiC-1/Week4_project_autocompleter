var test = require("tape");
var tapSpec = require("tap-spec");
var router = require("../src/router.js");
var supertest = require("supertest");
var fs = require("fs");

// test("ciao .txt test", function (assert){
// supertest(router)
// .get("/search")
// .expect(200)
// .end(function(error, response){
// assert.equal(response.text, JSON.stringify(["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"]), "risposta test ciaociao");
// assert.end();
// });
// });

test("one letter test", function (assert){
supertest(router)
.get("/search")
.query({description: "c"})
.expect(200)
.end(function(error, response){
assert.equal(response.text, JSON.stringify(["c","ca","caam","caama","caaming","caapeba","caatinga","cab","caba","cabaan"]), "risposta test esatto!");
assert.end();
});
});

test ("index.html", function (assert) {
    supertest(router)
        .get("/")
        .expect(200)
        .end(function(error, response) {
                assert.ok(response.text.includes("<title>Autocompletor</title>"),
                "Root renders index.html");
            assert.end();
        });
});

test("empty string", function (assert){
supertest(router)
.get("/search")
.query({description: ""})
.expect(200)
.end(function(error, response){
assert.equal(response.text, JSON.stringify([""]), "risposta test esatto!");
assert.end();
});
});

test("more than one letter", function (assert){
supertest(router)
.get("/search")
.query({description: "abi"})
.expect(200)
.end(function(error, response){
assert.equal(response.text, JSON.stringify(["abidal","abidance","abide","abider","abidi","abiding","abidingly","abidingness","abietate","abietene"]), "risposta test esatto!");
assert.end();
});
});
