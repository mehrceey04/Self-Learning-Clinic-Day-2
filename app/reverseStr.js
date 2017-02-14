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
	