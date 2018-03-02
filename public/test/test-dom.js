
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
  
