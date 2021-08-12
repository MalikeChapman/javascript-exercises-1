const sumAll = function() {
if((arguments[0] < 0) || (arguments[1] < 0))
{
return 'ERROR';
}
  else if((typeof arguments[0] !== 'number') || (typeof arguments[1] !== 'number'))
{
return 'ERROR';
}
let answer = 0;
let minNum = Math.min(arguments[0], arguments[1]);
let maxNum = Math.max(arguments[0], arguments[1]);
for (minNum; minNum <= maxNum; minNum++) 
{
answer += minNum;
}
return answer;

};

module.exports = sumAll;
