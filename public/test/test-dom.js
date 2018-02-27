test("dom test", function(assert) {
    function assertTestObj (obj) {
      assert.equal(obj, "<li>abc</li>");      
    }
    listNode (assertTestObj, "abc");
  });
  
  