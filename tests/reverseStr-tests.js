'use strict'

var myApp = require('../app/reverseStr.js');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for an empty string", function() {

    it("should return null for empty string", function() {
      expect(myApp.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myApp.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myApp.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myApp.reverseString('civic')).toEqual(true);
    });

    it("should return true for `madam`", function() {
      expect(myApp.reverseString('madam')).toEqual(true);
    });

    it("should return true for `eye`", function() {
      expect(myApp.reverseString('eye')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myApp.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myApp.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myApp.reverseString('misc')).toEqual('csim');
    });

    it("should return `ycrem` for `mercy`", function() {
      expect(myApp.reverseString('mercy')).toEqual('ycrem');
    });

    it("should return `live` for `evil`", function() {
      expect(myApp.reverseString('evil')).toEqual('live');
    });

  });

});