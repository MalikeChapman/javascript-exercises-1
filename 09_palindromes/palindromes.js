const palindromes = function () {
let string = arguments[0];
string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
		.replace(/\s/g, "");
string = string.toLowerCase();
console.log(string);
while(string.length > 1)
{
if(string.charAt(0) === string.charAt(string.length -1))
{
string = string.substring(1, string.length - 1);
}
else 
{
return false;
}

}
return true;


};

module.exports = palindromes;
