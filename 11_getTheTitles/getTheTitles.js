const getTheTitles = function() {
let array = arguments[0];
let answer = [];
for(let i = 0; i < array.length; i++)
{
answer.push(array[i].title);
}
return answer;

};

module.exports = getTheTitles;
