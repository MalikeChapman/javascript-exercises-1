const findTheOldest = function() {
let array = arguments[0];
let calculations = [];
for(let i = 0; i < array.length; i++)
{
let test = array[i].yearOfDeath;
console.log(test);
if(typeof test === 'undefined')
{
let date = new Date();
calculations.push(date.getFullYear() - array[i].yearOfBirth);
}
else 
{
calculations.push(array[i].yearOfDeath - array[i].yearOfBirth);
}
}
let indexOfLargest = 0;
for(let i = 0; i < calculations.length; i++)
{
console.log(calculations[i]);
if(calculations[indexOfLargest] < calculations[i])
{
indexOfLargest = i;
}
}
let answer = array[indexOfLargest];
console.log(answer)
return answer;

};

module.exports = findTheOldest;
