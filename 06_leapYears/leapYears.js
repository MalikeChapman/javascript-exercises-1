const leapYears = function() {
if((arguments[0] % 100 === 0) && (arguments[0] % 400 === 0))
{
return true;
} 
else if ((arguments[0] % 4 === 0) && (arguments[0] % 100 !== 0))
{
return true;
}

return false;
};

module.exports = leapYears;
