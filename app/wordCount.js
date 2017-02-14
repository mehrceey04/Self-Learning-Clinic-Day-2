/*
  * words(str)
  * it counts the occurences of each word in the string and 
    returns a JSON format showing the words identified and their occurences
  * the result is stored in objCount
*/

module.exports = {
  words : function(str){
    var objCount = {}, splitStr;
    splitStr = str.split(/[\s]+/);
    splitStr.forEach(function(word) {
      if(objCount.hasOwnProperty(word)) {
        objCount[word]++; //increments word by 1 if it reoccur
      } else {
        objCount[word] = 1;
      }
    });
    return objCount;
  }
}