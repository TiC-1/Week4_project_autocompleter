
  test("DOM Test", function(assert) {
    updateDOM(testobj);
  
    assert.equal(
    document.querySelector(".acList").textContent,
      "AaronAaronicAaronicalAaroniteAaroniticAaruAbabaAbabdehAbabua", "there is not a ul!!!");
  
    assert.equal(
      document.querySelectorAll("#acPreview li").length,
      10,
      "Inserts 10 words");
  });
  
  /*
  test("renderState Test", function(assert) {
    var obj = "AaronAaronicAaronicalAaroniteAaroniticAaruAbabaAbabdehAbabua";
    var rs = renderState(obj);
  
   assert.ok(rs.querySelector("li").href.includes('["Aaron" , "Aaronic" , "Aaronical","Aaronite" , "Aaronitic" , "Aaru" ,"Ab" , "aba" , "Ababdeh" , "Ababua"];'), "Video node has YouTube link");
    assert.ok(rs.querySelector(".acWords").lenght(10) , "Video node has picture");
    assert.ok(renderaState.textContent.includes("Sunny"), "Video node title");
  });
  */