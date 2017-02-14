/*
  *reverseString(str)
  *it returns the reverse of a string if its not a palindrome 
    and if its not an empty string
*/

module.exports = {
  reverseString : function(str){
    if(str.length === 0){
	  return null;
	}
	if(str.split('').reverse().join('') === str){
	  return true;
	}else{
	  return str.split('').reverse().join('');
	}	
  }
}
	