const fibonacci = function() {
let input = arguments[0];
if((arguments[0] < 0))
{
return 'OOPS';
} 
else if (typeof input === 'string')
{
input = parseInt(input);
}
let answer = calcFib(input);
return answer;

};
function calcFib(input)
{
if ((input === 1) || (input === 2))
{
return 1;
}
return calcFib(input - 1) + calcFib(input - 2);

}

module.exports = fibonacci;
