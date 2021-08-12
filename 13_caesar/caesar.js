const caesar = function() {
    let input = arguments[0];
    let answer = '';
    let charCode;


    for(let i = 0; i < input.length; i++)
    {
    charCode = input.charCodeAt(i);

    
    if(((charCode >= 65) && (charCode <= 90)))
    {
        if(arguments[1] < 0)
        {
let positive = arguments[1] * -1;
	for(let i = 0; i < positive; i++)
	{
	charCode--;
if(charCode < 65)
{
charCode = 90;
}
}
        }
        else 
        {
            for(let i = 0; i < arguments[1]; i++)
{
charCode++;
if(charCode > 90)
{
charCode = 65;
}
}
        }
    
    
    answer += String.fromCharCode(charCode);
    
    }
    else if ((charCode >= 97) && (charCode <= 122))
    {
    if(arguments[1] < 0)
    {
let positive = arguments[1] * -1;

    for(let i = 0; i < positive; i++)
    {
    charCode--;


    if(charCode < 97)
    {
    charCode = 122;
    }
    }
    }
    else 
    {
    for(let i = 0; i < arguments[1]; i++)
    {
    charCode++;
    if(charCode > 122)
    {
    charCode = 97;
    }
    }

    }
    
    
    answer += String.fromCharCode(charCode);
    }
    else
    {
    answer += input.charAt(i);
    }
    }
console.log(answer);
    return answer;
    
    };
    
    module.exports = caesar;
