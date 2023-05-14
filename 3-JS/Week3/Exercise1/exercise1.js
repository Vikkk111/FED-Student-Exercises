function palindrome(str) {
    var reg = /[\W_]/g;
     var amallStr = str.toLowerCase().replace(reg, "");

    

 var reversed = smallStr.split("").reverse().join("");
 if (reversed === str) 
    return true;

return false;
}

palindrome("eye")