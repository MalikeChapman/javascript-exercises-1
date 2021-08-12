const reverseString = function(str) {
if (str === '')
{ 
return '';
}
let answer = '';
for(let i = str.length - 1; i >= 0; i--)
{
answer += str.charAt(i);
}
return answer;

};

module.exports = reverseString;
