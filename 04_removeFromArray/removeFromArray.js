const removeFromArray = function() {
let test = arguments[0];
for(let i = 1; i < arguments.length; i++)
{
console.log(arguments[i]);
for(let j = 0; j < test.length; j++)
{
if(arguments[i] === test[j])
{
test.splice(j, 1);
console.log(test);
break;
}
}
}



return test;


};

module.exports = removeFromArray;
