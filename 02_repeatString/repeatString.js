const repeatString = function(string, repeatedTimes) {
let answer = '';
if (repeatedTimes === -1)
{return 'ERROR';}
for(let i = 0; i < repeatedTimes; i++)
{
answer += string;
}
return answer;

};

module.exports = repeatString;
