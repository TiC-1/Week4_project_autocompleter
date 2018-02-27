# Our week 3 project : A 'autocompleter' Webapp

**The goal of this week project is to make a webapp that on the input of a user it returns a list of possibile entries in order to complete the word the user is typing (like google!!)

## User stories

As a user, I want to type the first letter of a word i'm going to type in a textbox and see all the possible words that starts with that letter.

## Statement process

1. The user types a letter
2. A request is sent with the letter typed.
3. The server returns a list of possible words with the letter the user inserted.
4. The list is displayed on the page ( possibly in the textbox).
5. If the words displayed does not contain the word the user intended to write, the user type       another letter.
6. The old request is deleted and a new request is made with the new two letters.
7. The app returns a list of possible words with the letters the user inserted.
8. It goes like that until the user find the word he intended to write.


## File structure

Italic labels are directories, others are files.
- _public_
  -index.html
  -style.css
- _assets_
- _js_
  - logic.js
  - dom.js
- _test_
  - testobj.js
  - test-logic.html
  - test-logic.js
  - test-dom.html
  - test-dom.js
 


## Stech goal and app improvement

