
  test("DOM Test", function(assert) {
    updateDOM(testobj);
  
    assert.equal(
      document.querySelector("#acPreview").innerHTML,
      "<ul><li class=\"li_item\">Aaron</li><li class=\"li_item\">Aaronic</li><li class=\"li_item\">Aaronical</li><li class=\"li_item\">Aaronite</li><li class=\"li_item\">Aaronitic</li><li class=\"li_item\">Aaru</li><li class=\"li_item\">Ab</li><li class=\"li_item\">aba</li><li class=\"li_item\">Ababdeh</li><li class=\"li_item\">Ababua</li></ul>", "there is not a ul!!!");
  
    assert.equal(
      document.querySelectorAll("#acPreview li").length,
      10,
      "Inserts 10 words");
  });
  
  
  