const add = function() {
let answer = arguments[0] + arguments[1];
return answer;
	
};

const subtract = function() {
let answer = arguments[0] - arguments[1];
return answer;
	
};

const sum = function() {
let array = arguments[0];
let answer = 0;
for(let i = 0; i < array.length; i++)
{
answer += array[i];
}
return answer;
	
};

const multiply = function() {
let array = arguments[0];
let answer = 1;
for(let i = 0; i < array.length; i++)
{
answer *= array[i];
}
return answer;

};

const power = function() {
let answer = Math.pow(arguments[0], arguments[1]);
return answer;
	
};

const factorial = function() {
if ((arguments[0] === 1) || (arguments[0] === 0))
{
return 1;
}
let answer = 1;
for(let i = 1; i <= arguments[0]; i++)
{
answer *= i;
}
return answer;
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
