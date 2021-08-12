const ftoc = function() {
let answer = ((arguments[0] - 32) * 5) / 9;
if (Number.isInteger(answer))
{
return answer;
}
answer = answer.toFixed(1);

return Number(answer);

};

const ctof = function() {
let answer = ((arguments[0] * 1.8) + 32);
if (Number.isInteger(answer))
{
return answer;
}
answer = answer.toFixed(1);
return Number(answer);

};

module.exports = {
  ftoc,
  ctof
};
